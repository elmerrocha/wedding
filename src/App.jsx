import { useState, useEffect } from 'react';
import Blessing from "./components/Blessing";
import Ceremony from "./components/Ceremony";
import Countdown from "./components/Countdown";
import DressCode from "./components/DressCode";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Gifts from './components/Gifts';
import Header from "./components/Header";
import Intro from "./components/Intro";
import Reception from "./components/Reception";
import Rsvp from "./components/Rsvp";
import Tips from "./components/Tips";

export default function App() {
  const [opened, setOpened] = useState(false);
  const [audioBlocked, setAudioBlocked] = useState(false);
  const [showToast, setShowToast] = useState(false);

  // Mostrar toast durante 5 segundos si se bloquea el audio
  useEffect(() => {
    if (audioBlocked) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [audioBlocked]);

  return (
    <>
      {!opened ? (
        <Intro onOpen={() => setOpened(true)} setAudioBlocked={setAudioBlocked} />
      ) : (
        <div className="bg-cremarustico text-verdeOscuro min-h-screen relative">
          <Header />
          <Blessing />
          <main className="space-y-10 p-4 max-w-4xl mx-auto">
            <Countdown />
            <Gallery />
            <Ceremony />
            <Reception />
            <DressCode />
            <Rsvp />
            <Tips />
            <Gifts />
          </main>
          <Footer />

          {/* Toast flotante */}
          {showToast && (
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-marron text-white text-sm px-4 py-2 rounded-xl shadow-md z-50 animate-fade-in">
              🔇 En iPhone, desactiva el <strong>modo silencio</strong> (interruptor lateral) para escuchar la música.
            </div>
          )}
        </div>
      )}
    </>
  );
}
