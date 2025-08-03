import { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import useSound from 'use-sound';
import weddingSong from '../assets/wedding-song.mp3';

const Intro = ({ onOpen }) => {
    const [play] = useSound(weddingSong, { volume: 0.4 });
    const lottieRef = useRef();
    const [hasClicked, setHasClicked] = useState(false);
    const [showToast, setShowToast, setFadeOut] = useState(false);

    useEffect(() => {
        const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
        if (isIOS) {
            setShowToast(true);
            const fadeTimer = setTimeout(() => setFadeOut(true), 8000); // empieza a desvanecer a los 8s
            const removeTimer = setTimeout(() => {
                setShowToast(false);
                setFadeOut(false);
            }, 10000); // desaparece a los 10s
            return () => {
                clearTimeout(fadeTimer);
                clearTimeout(removeTimer);
            };
        }
    }, []);

    const handleOpen = async () => {
        if (hasClicked) return;
        setHasClicked(true);
        try {
            await play();
        } catch (e) {
            console.warn("Audio bloqueado por el navegador:", e);
        }
        if (lottieRef.current) {
            lottieRef.current.play();
        }
        setTimeout(() => {
            onOpen();
        }, 2800);
    };
    return (
        <div className="relative h-screen w-full bg-cremarustico flex justify-center items-center overflow-hidden">
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.0, delay: 0.5, type: 'spring' }}
            onClick={handleOpen}
            className="absolute bottom-40 md:bottom-40 z-10 text-3xl md:text-3xl font-vibes font-bold text-verdeOscuro cursor-pointer select-none"
        >
            Pulsa para abrir
        </motion.p>
        <Lottie
            lottieRef={lottieRef}
            path={'/lotties/intro.json'}
            loop
            onClick={handleOpen}
            autoplay={false}
            className="w-full h-full object-cover"
        />
        {showToast && (
            <div
            className={`fixed top-4 left-1/2 -translate-x-1/2 transform bg-marron/80 text-white text-sm px-4 py-2 rounded-xl shadow-lg z-50
                max-w-[90%] w-fit text-center whitespace-normal break-words`}
            >
            🔇 <span className="font-semibold">En iPhone, desactiva el modo silencio</span> (interruptor lateral) para escuchar la música.
            </div>
        )}
        </div>
    );
};

export default Intro;