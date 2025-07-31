// src/components/Blessing.jsx
import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import doveAnim from '../assets/dove.json';

export default function Blessing() {
    return (
        <motion.section
        className="bg-cremarustico py-20 px-4 text-center text-marron"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
        <Lottie animationData={doveAnim} loop className="w-full md:w-96 h-full md:h-96 mx-auto -my-10" />
        <h2 className="text-5xl md:text-5xl font-vibes leading-tight mb-12">
            Con la bendición de Dios y nuestros queridos padres…
        </h2>
        <div className="space-y-10 text-3xl font-vibes max-w-3xl mx-auto px-2">
            <div>
            <p className="italic">Gerson Hernando Gelvez Jurado</p>
            <p className="italic">Jacqueline Rodríguez Salazar</p>
            <p className="text-xl text-verdeClaro">(Padres de la novia)</p>
            </div>
            <div className="pt-10">
            <p className="italic">Elmer Eduardo Rocha</p>
            <p className="italic">María Leonor Jaime García</p>
            <p className="text-xl text-verdeClaro">(Padres del novio)</p>
            </div>
        </div>
        </motion.section>
    );
}
