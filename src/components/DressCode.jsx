import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import dressAnim from '../assets/dress.json';
import suitAnim from '../assets/suit.json';

const DressCode = () => {
    return (
        <motion.section
        className="bg-cremarustico pt-16 px-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
        <h2 className="text-6xl font-vibes text-verdeOscuro mb-8">Código de Vestimenta</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            >
            <Lottie animationData={dressAnim} loop className="w-32 h-32 mx-auto -mt-4" />
            <h3 className="text-3xl font-vibes text-verdeOscuro mb-2">Mujeres</h3>
            <p className="text-marron">
                Sugerimos tonos crema, verde oliva o dorado. Puedes usar vestidos elegantes con detalles suaves.
            </p>
            </motion.div>
            <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            >
            <Lottie animationData={suitAnim} loop className="w-24 h-24 mx-auto mb-4" />
            <h3 className="text-3xl font-vibes text-verdeOscuro mb-2">Hombres</h3>
            <p className="text-marron">
                Puedes vestir traje beige claro, complementado con verde oliva o marrón oscuro. ¡Estilo y comodidad!
            </p>
            </motion.div>
        </div>
        </motion.section>
    );
};

export default DressCode;