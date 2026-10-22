/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy, useState, useEffect } from 'react';
import { Header, type NavTab } from './components/Header';
import { Footer } from './components/Footer';
import { HoverInspectorProvider, LanChatbot } from './components/LanChatbot';
import { SoundtrackProvider, useSoundtrack } from './context/SoundtrackContext';
import { MiniAudioPlayer } from './components/SoundsOfSpain/MiniAudioPlayer';

const HomeSection = lazy(() => import('./components/HomeSection').then(({ HomeSection }) => ({ default: HomeSection })));
const DestinationsSection = lazy(() => import('./components/DestinationsSection').then(({ DestinationsSection }) => ({ default: DestinationsSection })));
const FoodSection = lazy(() => import('./components/FoodSection').then(({ FoodSection }) => ({ default: FoodSection })));
const CultureSection = lazy(() => import('./components/CultureSection').then(({ CultureSection }) => ({ default: CultureSection })));
const SoundsOfSpainSection = lazy(() => import('./components/SoundsOfSpain/SoundsOfSpainSection').then(({ SoundsOfSpainSection }) => ({ default: SoundsOfSpainSection })));
const ItinerarySection = lazy(() => import('./components/ItinerarySection').then(({ ItinerarySection }) => ({ default: ItinerarySection })));
const LanguageSection = lazy(() => import('./components/LanguageSection').then(({ LanguageSection }) => ({ default: LanguageSection })));
const BeyondSpainSection = lazy(() => import('./components/BeyondSpainSection').then(({ BeyondSpainSection }) => ({ default: BeyondSpainSection })));
const SportsSection = lazy(() => import('./components/SportsSection').then(({ SportsSection }) => ({ default: SportsSection })));
const LiteratureSection = lazy(() => import('./components/LiteratureSection').then(({ LiteratureSection }) => ({ default: LiteratureSection })));

function SoundsPagePlayerManager({ currentTab }: { currentTab: NavTab }) {
  const { pauseTrack, setIsMiniPlayerOpen } = useSoundtrack();

  // Show player bar only on the 'sonidos' page. If user navigates away, hide player and pause playback.
  useEffect(() => {
    if (currentTab === 'sonidos') {
      setIsMiniPlayerOpen(true);
    } else {
      setIsMiniPlayerOpen(false);
      pauseTrack();
    }
  }, [currentTab, pauseTrack, setIsMiniPlayerOpen]);

  if (currentTab !== 'sonidos') {
    return null;
  }

  return <MiniAudioPlayer onOpenSection={() => {}} />;
}

export default function App() {
  const [currentTab, setCurrentTab] = useState<NavTab>('inicio');
  const [selectedCityId, setSelectedCityId] = useState<string>('madrid');

  const handleSelectCity = (cityId: string) => {
    setSelectedCityId(cityId);
  };

  return (
    <HoverInspectorProvider>
      <SoundtrackProvider>
        <div className="min-h-screen bg-[#FFFFFF] text-[#222522] flex flex-col font-sans selection:bg-[#E2B342]/40 selection:text-[#222522] relative">
          {/* Main Clean Header */}
          <Header
            currentTab={currentTab}
            onSelectTab={setCurrentTab}
          />

          {/* Main Content Area */}
          <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            <Suspense fallback={<div className="min-h-[40vh] flex items-center justify-center text-sm font-semibold text-[#52634D]" role="status" aria-live="polite">Cargando la sección…</div>}>
              {currentTab === 'inicio' && (
                <HomeSection
                  onSelectTab={setCurrentTab}
                  onSelectCity={handleSelectCity}
                />
              )}

              {currentTab === 'destinos' && (
                <DestinationsSection
                  initialCityId={selectedCityId}
                />
              )}

              {currentTab === 'sabores' && (
                <FoodSection />
              )}

              {currentTab === 'cultura' && (
                <CultureSection />
              )}

              {currentTab === 'sonidos' && (
                <SoundsOfSpainSection />
              )}

              {currentTab === 'deportes' && <SportsSection />}

              {currentTab === 'literatura' && <LiteratureSection />}

              {currentTab === 'planifica' && (
                <ItinerarySection />
              )}

              {currentTab === 'idioma' && (
                <LanguageSection />
              )}

              {currentTab === 'mundo' && (
                <BeyondSpainSection onSelectTab={setCurrentTab} />
              )}
            </Suspense>
          </main>

          {/* Editorial Footer */}
          <Footer onSelectTab={setCurrentTab} />

          {/* Spotify-Style Bottom Bar (Only visible when on the 'sonidos' page) */}
          <SoundsPagePlayerManager currentTab={currentTab} />

          {/* Lola - Language Assistant & Bottom Live Hover Translation */}
          <LanChatbot />
        </div>
      </SoundtrackProvider>
    </HoverInspectorProvider>
  );
}
