import React, { useState } from 'react';
import { PHRASES_DATA, QUIZ_QUESTIONS, PhraseCard } from '../data/contentData';
import { AudioPronounceButton } from './AudioPronounceButton';
import { Tooltip } from './Tooltip';
import {
  BookOpen,
  Volume2,
  HelpCircle,
  Shuffle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Sparkles,
  Eye,
  EyeOff
} from 'lucide-react';

export const LanguageSection: React.FC = () => {
  // Phrases state
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [revealedCardIds, setRevealedCardIds] = useState<Record<string, boolean>>({});
  const [activePhraseIndex, setActivePhraseIndex] = useState<number>(0);

  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showQuizResults, setShowQuizResults] = useState<boolean>(false);

  const categories = ['Todos', 'Saludos', 'Comida', 'Direcciones', 'Transporte', 'De Compras', 'Emergencias'];

  const filteredPhrases = selectedCategory === 'Todos'
    ? PHRASES_DATA
    : PHRASES_DATA.filter((p) => p.category === selectedCategory);

  const currentFlashcard = filteredPhrases[activePhraseIndex % filteredPhrases.length] || PHRASES_DATA[0];
  const isCurrentCardRevealed = Boolean(revealedCardIds[currentFlashcard.id]);

  const toggleRevealCard = (id: string) => {
    setRevealedCardIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleNextPhrase = () => {
    setActivePhraseIndex((prev) => (prev + 1) % filteredPhrases.length);
  };

  const handleShufflePhrase = () => {
    const randomIndex = Math.floor(Math.random() * filteredPhrases.length);
    setActivePhraseIndex(randomIndex);
  };

  // Quiz calculations
  const handleSelectAnswer = (questionId: number, optionIndex: number) => {
    if (selectedAnswers[questionId] !== undefined) return;
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  };

  const currentQuizQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
  const answeredCount = Object.keys(selectedAnswers).length;
  const isCurrentAnswered = selectedAnswers[currentQuizQuestion.id] !== undefined;

  const correctAnswersCount = QUIZ_QUESTIONS.reduce((count, q) => {
    return selectedAnswers[q.id] === q.correctIndex ? count + 1 : count;
  }, 0);

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setShowQuizResults(false);
  };

  return (
    <div className="space-y-16 lg:space-y-24">
      {/* Editorial Header (Borderless) */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#52634D]">
          <span>CAPÍTULO VI · LABORATORIO LINGÜÍSTICO</span>
          <span aria-hidden="true">·</span>
          <span>ESPAÑOL PRÁCTICO PARA VIAJEROS</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-[#222522] leading-[1.1]">
          Habla Español: Frases Prácticas y Cuestionario
        </h1>
        <p className="text-base sm:text-lg text-[#222522]/85 max-w-3xl leading-relaxed">
          Aprende a comunicarte con naturalidad y cortesía durante tu estancia en España. Escucha la pronunciación nativa europea, practica la memorización con tarjetas interactivas y pon a prueba tus conocimientos en nuestro cuestionario de viaje.
        </p>
      </div>

      {/* SECTION 1: INTERACTIVE TRAVEL PHRASE EXPLORER (BORDERLESS EDITORIAL) */}
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#A51E2D]" />
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#222522]">
                Explorador de Frases Esenciales de Viaje
              </h2>
            </div>
            <p className="text-sm text-[#222522]/75 mt-1">
              Filtra por situación cotidiana, escucha el audio nativo o pulsa «Revelar» para verificar la traducción.
            </p>
          </div>

          {/* Shuffle & Next Controls */}
          <div className="flex items-center gap-4 text-xs font-bold">
            <button
              onClick={handleShufflePhrase}
              className="text-[#52634D] hover:text-[#A51E2D] inline-flex items-center gap-1.5 underline underline-offset-4"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>Aleatorio</span>
            </button>
            <span className="text-[#222522]/30">·</span>
            <button
              onClick={handleNextPhrase}
              className="text-[#A51E2D] hover:text-[#861A27] inline-flex items-center gap-1.5 underline underline-offset-4"
            >
              <span>Siguiente ({activePhraseIndex + 1}/{filteredPhrases.length})</span>
            </button>
          </div>
        </div>

        {/* Category Filter Tabs (Minimalist Typography) */}
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setActivePhraseIndex(0);
                }}
                className={`py-1.5 px-3 rounded-lg text-xs font-bold transition-all ${
                  isActive
                    ? 'bg-[#A51E2D] text-[#FBF8F1]'
                    : 'text-[#222522]/75 hover:text-[#222522] hover:bg-[#222522]/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured Flashcard (Borderless Editorial Layout) */}
        <div className="space-y-6 max-w-4xl pt-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex min-w-0 flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#A51E2D] font-bold">
              <span>SITUACIÓN: {currentFlashcard.category.toUpperCase()}</span>
              <span aria-hidden="true" className="text-xs text-[#222522]/30">·</span>
              <span className="text-xs text-[#52634D] font-semibold">ESPAÑOL PENINSULAR</span>
            </div>
            <AudioPronounceButton
              phrase={currentFlashcard.spanish}
              size="md"
              label="Escuchar Español"
              spanishPrompt="«¡Escucha y practica la pronunciación! 🗣️»"
            />
          </div>

          {/* Spanish Phrase */}
          <div className="space-y-3">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-[#222522] leading-tight">
              «{currentFlashcard.spanish}»
            </h3>

            {/* Phonetic Pronunciation Guide */}
            <p className="text-xs font-mono text-[#52634D]">
              Guía fonética: <span className="font-bold text-[#222522]">{currentFlashcard.phonetic}</span>
            </p>

            {/* Context Tip */}
            <p className="text-sm text-[#222522]/85 italic">
              💡 {currentFlashcard.contextTip}
            </p>
          </div>

          {/* Reveal Translation Toggle Interaction */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              {isCurrentCardRevealed ? (
                <div className="text-lg font-serif font-bold text-[#A51E2D] animate-in fade-in duration-150">
                  Inglés: «{currentFlashcard.english}»
                </div>
              ) : (
                <span className="text-xs text-[#222522]/60 font-medium">
                  Traducción oculta para ejercitar la memoria
                </span>
              )}
            </div>

            <button
              onClick={() => toggleRevealCard(currentFlashcard.id)}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#A51E2D] hover:underline"
            >
              {isCurrentCardRevealed ? (
                <>
                  <EyeOff className="w-3.5 h-3.5" />
                  <span>Ocultar Traducción</span>
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5" />
                  <span>Revelar Traducción</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Phrases Catalog Grid (Clean Unboxed Grid) */}
        <div className="pt-6 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#52634D] font-bold">
            Catálogo de Frases en «{selectedCategory}» ({filteredPhrases.length} disponibles):
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPhrases.map((phrase) => {
              const isRevealed = Boolean(revealedCardIds[phrase.id]);
              return (
                <div
                  key={phrase.id}
                  className="space-y-1"
                >
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-base font-serif font-bold text-[#222522]">
                      {phrase.spanish}
                    </p>
                    <AudioPronounceButton
                      phrase={phrase.spanish}
                      size="sm"
                      spanishPrompt="«¡Escuchar! 🎙️»"
                    />
                  </div>
                  {isRevealed ? (
                    <p className="text-xs text-[#A51E2D] italic font-serif">
                      {phrase.english}
                    </p>
                  ) : (
                    <button
                      onClick={() => toggleRevealCard(phrase.id)}
                      className="text-xs text-[#52634D] underline hover:text-[#A51E2D]"
                    >
                      Ver significado
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* SECTION 2: INTERACTIVE SPANISH TRAVEL QUIZ (BORDERLESS EDITORIAL) */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-[#A51E2D]" />
              <h2 className="text-2xl sm:text-3xl font-serif font-black text-[#222522]">
                Cuestionario de Comprensión Cultural y Lingüística
              </h2>
            </div>
            <p className="text-sm text-[#222522]/75 mt-1">
              Pon a prueba tus conocimientos sobre frases de viaje, cocina tradicional y geografía de España.
            </p>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="font-bold text-[#52634D]">
              Respondidas: {answeredCount} de {QUIZ_QUESTIONS.length}
            </span>
            <button
              onClick={handleResetQuiz}
              className="text-[#52634D] hover:text-[#A51E2D] underline underline-offset-4 inline-flex items-center gap-1 font-bold font-sans"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reiniciar</span>
            </button>
          </div>
        </div>

        {!showQuizResults ? (
          <div className="space-y-6 max-w-3xl">
            {/* Question */}
            <div className="space-y-4">
              <span className="text-xs font-mono uppercase font-bold text-[#A51E2D] block">
                PREGUNTA 0{currentQuestionIndex + 1} DE 0{QUIZ_QUESTIONS.length}
              </span>

              <h3 className="text-2xl font-serif font-bold text-[#222522]">
                {currentQuizQuestion.question}
              </h3>

              {/* Options */}
              <div className="space-y-2 pt-2">
                {currentQuizQuestion.options.map((option, idx) => {
                  const isSelected = selectedAnswers[currentQuizQuestion.id] === idx;
                  const hasAnswered = selectedAnswers[currentQuizQuestion.id] !== undefined;
                  const isCorrect = idx === currentQuizQuestion.correctIndex;

                  let textStyle = 'text-[#222522] hover:text-[#A51E2D]';

                  if (hasAnswered) {
                    if (isCorrect) {
                      textStyle = 'text-emerald-700 font-bold';
                    } else if (isSelected) {
                      textStyle = 'text-rose-700 line-through';
                    } else {
                      textStyle = 'text-[#222522]/40';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectAnswer(currentQuizQuestion.id, idx)}
                      disabled={hasAnswered}
                      className={`w-full text-left py-2.5 transition-all flex items-center justify-between text-sm sm:text-base ${textStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-mono font-bold text-xs text-[#52634D]">
                          {String.fromCharCode(65 + idx)}.
                        </span>
                        <span>{option}</span>
                      </div>

                      {hasAnswered && (
                        <span>
                          {isCorrect ? (
                            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                          ) : isSelected ? (
                            <XCircle className="w-4 h-4 text-rose-600" />
                          ) : null}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Feedback Explanation */}
              {isCurrentAnswered && (
                <div className="pt-3 text-sm text-[#222522] animate-in fade-in duration-200">
                  <span className="font-bold text-[#A51E2D] block mb-1">
                    {selectedAnswers[currentQuizQuestion.id] === currentQuizQuestion.correctIndex
                      ? '✓ ¡Respuesta Correcta!'
                      : '✗ Explicación:'}
                  </span>
                  <p className="leading-relaxed font-sans">{currentQuizQuestion.explanation}</p>
                </div>
              )}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-between pt-4">
              <button
                onClick={() => setCurrentQuestionIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentQuestionIndex === 0}
                className="text-xs font-bold text-[#222522] disabled:opacity-30 hover:text-[#A51E2D] underline underline-offset-4"
              >
                ← Anterior
              </button>

              <div className="flex items-center gap-2">
                {QUIZ_QUESTIONS.map((q, i) => (
                  <button
                    key={q.id}
                    onClick={() => setCurrentQuestionIndex(i)}
                    className={`w-7 h-7 rounded-full text-xs font-mono font-bold transition-colors ${
                      currentQuestionIndex === i
                        ? 'bg-[#A51E2D] text-[#FBF8F1]'
                        : selectedAnswers[q.id] !== undefined
                        ? 'bg-[#52634D] text-[#FBF8F1]'
                        : 'text-[#222522]/60 hover:text-[#222522]'
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>

              {currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? (
                <button
                  onClick={() => setCurrentQuestionIndex((prev) => prev + 1)}
                  className="text-xs font-bold text-[#A51E2D] hover:underline underline-offset-4"
                >
                  Siguiente →
                </button>
              ) : (
                <button
                  onClick={() => setShowQuizResults(true)}
                  disabled={answeredCount < QUIZ_QUESTIONS.length}
                  className="text-xs font-bold text-[#A51E2D] hover:underline underline-offset-4 disabled:opacity-40"
                >
                  Ver Resultado Final →
                </button>
              )}
            </div>
          </div>
        ) : (
          /* Final Quiz Results Summary */
          <div className="text-center space-y-4 py-8 max-w-lg mx-auto">
            <Sparkles className="w-10 h-10 text-[#E2B342] mx-auto animate-bounce" />
            <h3 className="text-3xl font-serif font-black text-[#222522]">
              ¡Cuestionario de Viaje Completado!
            </h3>
            <div className="text-5xl font-serif font-bold text-[#A51E2D] tabular-nums">
              {correctAnswersCount} / {QUIZ_QUESTIONS.length} aciertos
            </div>
            <p className="text-sm text-[#222522]/85 leading-relaxed">
              {correctAnswersCount === 5
                ? '¡Extraordinario! Posees un dominio excelente del vocabulario básico, la cocina tradicional y la geografía española.'
                : '¡Buen intento! Repasa las expresiones esenciales y vuelve a probar para afianzar tus conocimientos.'}
            </p>
            <div className="pt-4">
              <button
                onClick={handleResetQuiz}
                className="px-6 py-3 bg-[#A51E2D] text-[#FBF8F1] text-xs font-bold rounded-xl hover:bg-[#861A27] transition-colors"
              >
                Volver a Intentar el Cuestionario
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
