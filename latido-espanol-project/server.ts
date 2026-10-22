import { createServer as createViteServer } from 'vite';
import { createServer as createHttpServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { existsSync, readFileSync } from 'node:fs';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';

const projectRoot = process.cwd();
const port = Number(process.env.PORT || 3000);
const distPath = path.join(projectRoot, 'dist');

const contentTypes: Record<string, string> = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mp3': 'audio/mpeg',
  '.ogg': 'audio/ogg',
  '.wav': 'audio/wav',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
};

function getGeminiApiKey(): string {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY.trim();
  try {
    const envFile = path.join(projectRoot, '.env');
    if (existsSync(envFile)) {
      const content = readFileSync(envFile, 'utf-8');
      const match = content.match(/GEMINI_API_KEY=\s*([^\r\n]+)/);
      if (match && match[1]) return match[1].trim();
    }
  } catch {}
  return '';
}

async function parseJsonBody(req: IncomingMessage): Promise<any> {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk;
      if (body.length > 5e5) {
        req.destroy();
        reject(new Error('Payload too large'));
      }
    });
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(err);
      }
    });
    req.on('error', reject);
  });
}

function sendJsonResponse(res: ServerResponse, statusCode: number, data: any) {
  const json = JSON.stringify(data);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  });
  res.end(json);
}

async function handleLanguageAssistantApi(req: IncomingMessage, res: ServerResponse): Promise<boolean> {
  const url = req.url?.split('?')[0];

  if (req.method === 'OPTIONS' && url?.startsWith('/api/language-assistant')) {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    }).end();
    return true;
  }

  if (url === '/api/language-assistant/explain' && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      const text = (body.text || '').trim();
      const targetLang = (body.targetLang || 'en').toLowerCase();

      const languageNames: Record<string, string> = {
        en: 'English',
        fr: 'French (Français)',
        de: 'German (Deutsch)',
        it: 'Italian (Italiano)',
        pt: 'Portuguese (Português)',
        ja: 'Japanese (日本語)',
        zh: 'Simplified Chinese (中文)',
        hi: 'Hindi (हिन्दी)'
      };
      const targetLanguageName = languageNames[targetLang] || 'English';

      if (!text) {
        sendJsonResponse(res, 400, { error: 'Text is required' });
        return true;
      }

      const apiKey = getGeminiApiKey();
      if (!apiKey) {
        sendJsonResponse(res, 200, {
          translation: text,
          meaning: `Direct Spanish phrase from Latido Español (${targetLanguageName}).`,
          partOfSpeech: 'Expresión',
          pronunciation: text.toLowerCase(),
          category: 'Español',
          targetLang
        });
        return true;
      }

      const prompt = `You are a Spanish language and cultural expert for the travel magazine "Latido Español".
Analyze the Spanish text/word: "${text}".
Translate it accurately and idiomatically into ${targetLanguageName}.
Return a strictly valid JSON object without markdown formatting with the following fields:
- "translation": accurate, natural ${targetLanguageName} translation
- "meaning": clear concise explanation of meaning and context in ${targetLanguageName} (1-2 sentences)
- "partOfSpeech": grammatical category (e.g., noun, verb phrase, greeting, food term, cultural monument, idiom)
- "pronunciation": phonetic pronunciation guide
- "category": one of ["Comida", "Saludos", "Viajes", "Cultura", "Gramática", "Lugares", "Expresiones"]
- "culturalNote": brief cultural context or etiquette note about Spain in ${targetLanguageName} if applicable
- "targetLang": "${targetLang}"`;

      const geminiRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ parts: [{ text: prompt }] }],
            generationConfig: { responseMimeType: 'application/json' }
          })
        }
      );

      if (!geminiRes.ok) {
        const errText = await geminiRes.text();
        console.error('Gemini API explain error:', errText);
        sendJsonResponse(res, 200, {
          translation: text,
          meaning: `Spanish phrase from Latido Español (${targetLanguageName}).`,
          partOfSpeech: 'Expresión',
          pronunciation: text.toLowerCase(),
          category: 'Español',
          targetLang
        });
        return true;
      }

      const geminiData = await geminiRes.json();
      const rawOutput = geminiData.candidates?.[0]?.content?.parts?.[0]?.text;
      if (rawOutput) {
        try {
          const parsed = JSON.parse(rawOutput);
          sendJsonResponse(res, 200, { ...parsed, targetLang });
          return true;
        } catch {
          // If JSON parse failed
        }
      }

      sendJsonResponse(res, 200, {
        translation: text,
        meaning: `Spanish phrase from Latido Español (${targetLanguageName}).`,
        partOfSpeech: 'Expresión',
        pronunciation: text.toLowerCase(),
        category: 'Español',
        targetLang
      });
      return true;
    } catch (err: any) {
      console.error('API explain error:', err);
      sendJsonResponse(res, 500, { error: err.message || 'Internal error' });
      return true;
    }
  }

  if (url === '/api/language-assistant/chat' && req.method === 'POST') {
    try {
      const body = await parseJsonBody(req);
      const messages: { role: 'user' | 'assistant'; content: string }[] = body.messages || [];
      const activeHoverText: string = (body.activeHoverText || '').trim();
      const targetLang: string = (body.targetLang || 'en').toLowerCase();

      const languageNames: Record<string, string> = {
        en: 'English',
        fr: 'French',
        de: 'German',
        it: 'Italian',
        pt: 'Portuguese',
        ja: 'Japanese',
        zh: 'Chinese',
        hi: 'Hindi'
      };
      const targetLanguageName = languageNames[targetLang] || 'English';

      const apiKey = getGeminiApiKey();
      if (!apiKey) {
        sendJsonResponse(res, 200, {
          reply: '¡Hola! Soy Lola, tu asistente de español en Latido Español. Puedes pasar el ratón o pulsar sobre cualquier texto de la web para ver su traducción.',
          suggestedPrompts: ['¿Cómo pedir comida en España?', '¿Qué es la sobremesa?', 'Frases para viajar']
        });
        return true;
      }

      const systemInstruction = `You are "Lola", an authentic, warm, charming, and knowledgeable Spanish language tutor and travel companion for "Latido Español".
LANGUAGE DIRECTIVE:
- The user can type and ask questions in ANY language (English, French, German, Italian, Portuguese, Hindi, Spanish, Chinese, Japanese, etc.).
- You must always converse and write your answers in the user's language (default: ${targetLanguageName}), so that travelers and language learners can easily understand and learn!
- When explaining Spanish terms or teaching Spanish, highlight the Spanish text in bold with quotes (e.g. «Sobremesa», «Tapeo», «Una caña, por favor»), followed immediately by the natural translation and explanation in the user's language.
- Provide clear phonetic pronunciation guides (e.g. /soh-breh-MEH-sah/) and practical cultural etiquette tips for traveling in Spain.
${activeHoverText ? `Note: The user is currently asking about or hovered over this Spanish text from the website: "${activeHoverText}".` : ''}
Keep your tone encouraging, culturally rich, and friendly. Use clean markdown formatting with bullet points where helpful.`;

      const contents = [
        {
          role: 'user',
          parts: [{ text: systemInstruction }]
        },
        ...messages.map((m) => ({
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: m.content }]
        }))
      ];

      const geminiRes = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents })
        }
      );

      if (!geminiRes.ok) {
        const errText = await geminiRes.text();
        console.error('Gemini chat error:', errText);
        sendJsonResponse(res, 200, {
          reply: '¡Hola! ¿En qué expresión o frase española te gustaría profundizar hoy?',
          suggestedPrompts: ['¿Cómo pido una caña?', '¿Qué significa sobremesa?', 'Frases para el tren']
        });
        return true;
      }

      const geminiData = await geminiRes.json();
      const reply = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || '¡Encantado de ayudarte con tu español!';

      sendJsonResponse(res, 200, {
        reply,
        suggestedPrompts: [
          '¿Cómo se pronuncia en España?',
          'Dame un ejemplo en un restaurante',
          'Explícame la diferencia cultural'
        ]
      });
      return true;
    } catch (err: any) {
      console.error('API chat error:', err);
      sendJsonResponse(res, 500, { error: err.message || 'Internal error' });
      return true;
    }
  }

  return false;
}

async function serveProductionFile(req: IncomingMessage, res: ServerResponse) {
  const pathname = decodeURIComponent(new URL(req.url || '/', 'http://localhost').pathname);
  const candidate = path.resolve(distPath, `.${pathname}`);
  if (candidate !== distPath && !candidate.startsWith(`${distPath}${path.sep}`)) {
    res.writeHead(403).end();
    return;
  }

  let filePath = candidate === distPath ? path.join(distPath, 'index.html') : candidate;
  let fileStat;
  try {
    fileStat = await stat(filePath);
    if (!fileStat.isFile()) {
      filePath = path.join(distPath, 'index.html');
      fileStat = await stat(filePath);
    }
  } catch {
    filePath = path.join(distPath, 'index.html');
    try {
      fileStat = await stat(filePath);
    } catch {
      res.writeHead(404).end('Not found');
      return;
    }
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = contentTypes[ext] || 'application/octet-stream';
  const fileSize = fileStat.size;
  const range = req.headers.range;

  if (range && (ext === '.mp3' || ext === '.ogg' || ext === '.wav')) {
    const parts = range.replace(/bytes=/, '').split('-');
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;

    if (start >= fileSize || end >= fileSize) {
      res.writeHead(416, {
        'Content-Range': `bytes */${fileSize}`
      });
      res.end();
      return;
    }

    const chunksize = end - start + 1;
    const { createReadStream } = await import('node:fs');
    const fileStream = createReadStream(filePath, { start, end });
    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${fileSize}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunksize,
      'Content-Type': contentType,
    });
    fileStream.pipe(res);
    return;
  }

  try {
    const contents = await readFile(filePath);
    res.writeHead(200, {
      'Content-Type': contentType,
      'Accept-Ranges': 'bytes',
      'Content-Length': fileSize,
      'Cache-Control': path.basename(filePath) === 'index.html' ? 'no-cache' : 'public, max-age=3600',
    });
    res.end(contents);
  } catch {
    res.writeHead(404).end('Not found');
  }
}

let vite: Awaited<ReturnType<typeof createViteServer>> | null = null;

const server = createHttpServer(async (req, res) => {
  // First intercept /api/ endpoints
  if (req.url?.startsWith('/api/language-assistant')) {
    const handled = await handleLanguageAssistantApi(req, res);
    if (handled) return;
  }

  if (process.env.NODE_ENV === 'production') {
    await serveProductionFile(req, res);
    return;
  }

  if (!vite) {
    res.writeHead(503).end('Development server is not ready');
    return;
  }
  vite.middlewares(req, res, (error?: unknown) => {
    if (error) {
      console.error(error);
      if (!res.headersSent) res.writeHead(500);
      if (!res.writableEnded) res.end('Internal server error');
    } else if (!res.writableEnded) {
      res.writeHead(404).end('Not found');
    }
  });
});

if (process.env.NODE_ENV !== 'production') {
  vite = await createViteServer({ server: { middlewareMode: true }, appType: 'spa' });
}

if (!process.env.NODE_ENV && !existsSync(path.join(projectRoot, 'index.html'))) {
  throw new Error('Run the Latido Español server from the project root.');
}

server.listen(port, '0.0.0.0', () => {
  console.log(`Latido Español is available at http://localhost:${port}`);
});
