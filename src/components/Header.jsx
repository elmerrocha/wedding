import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';

const Header = () => {
    return (
        <motion.header
        className="bg-cremarustico text-center pt-10 px-4 -mb-20"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
        >
        <img
            src={`${import.meta.env.BASE_URL}dye_rustico.svg`}
            alt="Daniela & Elmer"
            className="w-80 h-80 mx-auto"
        />
        <p className="text-4xl font-vibes text-marron max-w-xl mx-auto">
            Nos casamos y queremos compartir este momento inolvidable contigo
        </p>
        <Lottie path={'/lotties/heartbeat.json'} loop autoplay className="w-80 h-80 mx-auto -my-20" />
        <p className="font-vibes text-6xl text-verdeOscuro mt-10">11 de enero, 2026</p>
        </motion.header>
    );
};

export default Header;