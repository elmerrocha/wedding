import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import envelopeAnim from '../assets/intro.json';
import useSound from 'use-sound';
import weddingSong from '../assets/wedding-song.mp3';

const Intro = ({ onOpen }) => {
    const [play] = useSound(weddingSong, { volume: 0.4 });
    const lottieRef = useRef();
    const [hasClicked, setHasClicked] = useState(false);
    const [audioBlocked, setAudioBlocked] = useState(false);

    const handleOpen = async () => {
        if (hasClicked) return;
        setHasClicked(true);

        try {
        await play();
        } catch (e) {
        console.warn("Audio bloqueado por el navegador:", e);
        setAudioBlocked(true);
        }

        if (lottieRef.current) {
        lottieRef.current.play();
        }

        setTimeout(() => {
        onOpen();
        }, 2800);
    };

    const handleManualPlay = async () => {
        try {
        await play();
        setAudioBlocked(false);
        } catch (e) {
        console.warn("El usuario intentó activar el audio y falló:", e);
        }
    };

    return (
        <div className="relative h-screen w-full bg-cremarustico flex justify-center items-center overflow-hidden">

        {/* Texto principal */}
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.0, delay: 0.5, type: 'spring' }}
            onClick={handleOpen}
            className="absolute bottom-40 md:bottom-40 z-10 text-3xl md:text-3xl font-vibes font-bold text-verdeOscuro cursor-pointer select-none"
        >
            Pulsa para abrir
        </motion.p>

        {/* Animación */}
        <Lottie
            lottieRef={lottieRef}
            animationData={envelopeAnim}
            loop
            onClick={handleOpen}
            autoplay={false}
            className="w-full h-full object-cover"
        />

        {/* Botón si el audio fue bloqueado */}
        {audioBlocked && (
            <div className="absolute inset-0 flex justify-center items-center z-20 bg-cremarustico bg-opacity-80">
            <button
                onClick={handleManualPlay}
                className="bg-dorado text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-[#a68000] transition text-xl"
            >
                Activar sonido 🎵
            </button>
            </div>
        )}
        </div>
    );
};

export default Intro;
