import { useState } from 'react';
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

  return (
    <>
      {!opened ? (
        <Intro onOpen={() => setOpened(true)} />
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
        </div>
      )}
    </>
  );
}
