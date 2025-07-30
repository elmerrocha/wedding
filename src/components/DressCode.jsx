import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import dressAnim from '../assets/dress.json';
import suitAnim from '../assets/suit.json';
import colorPalette from '../assets/palette.json';

const PinterestIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 496 512"
        fill="currentColor"
        className="w-5 h-5 mr-2"
    >
        <path d="M248 8C111 8 0 119 0 256c0 110.1 71.3 203.7 170.5 236.9-2.4-20.1-4.6-51 1-73.1 5-20.4 32-129.7 32-129.7s-8.1-16.2-8.1-40.1c0-37.5 21.8-65.6 49-65.6 23.1 0 34.3 17.4 34.3 38.3 0 23.4-14.9 58.4-22.6 90.9-6.4 27 13.6 49 40.4 49 48.4 0 81-62.1 81-135.4 0-55.9-37.7-97.8-106.2-97.8-77.4 0-125.6 57.9-125.6 122.4 0 22.3 6.6 38 16.9 50.2 4.7 5.6 5.4 7.8 3.7 14.1-1.2 4.6-4 15.8-5.2 20.2-1.7 6.4-6.9 8.6-12.7 6.3-35.5-14.5-52-53.3-52-97.1 0-72.1 60.7-158.7 181.2-158.7 96.9 0 160.6 70.1 160.6 145.3 0 99.2-55.2 173.3-136.7 173.3-27.3 0-53-14.8-61.8-31.6l-16.8 64.2c-6.1 23.4-22.6 52.7-33.7 70.6C194.8 506 220.9 512 248 512c137 0 248-111 248-248S385 8 248 8z" />
    </svg>
    );

    const DressCode = () => {
    return (
        <motion.section
        className="bg-cremarustico pt-16 px-4 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
        <Lottie animationData={colorPalette} loop className="w-40 h-40 mx-auto mb-10" />
        <h2 className="text-6xl font-vibes text-verdeOscuro mb-10">Código de Vestimenta</h2>
        <img
            src={`${import.meta.env.BASE_URL}colors.webp`}
            alt="Paleta de colores sugeridos"
            className="mx-auto max-w-3xl w-full rounded-xl shadow-md mb-10"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Mujeres */}
            <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            >
            <Lottie animationData={dressAnim} loop className="w-32 h-32 mx-auto -mt-4" />
            <h3 className="text-3xl font-vibes text-verdeOscuro mb-4">Mujeres</h3>
            <p className="text-marron mb-4">
                Vestimenta formal de día. Colores sugeridos: tonos verdes oscuros, terracotas, burgundy, mostaza, azul pizarra o gris suave.
            </p>
            <a
                href="https://pin.it/2w7FYGUSj"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-2 bg-cremarustico border-2 border-dorado text-marron px-4 py-2 rounded-lg font-semibold shadow hover:bg-beige transition"
            >
                <PinterestIcon />
                Ver ejemplos
            </a>
            </motion.div>

            {/* Hombres */}
            <motion.div
            className="bg-white p-6 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            >
            <Lottie animationData={suitAnim} loop className="w-24 h-24 mx-auto mb-4" />
            <h3 className="text-3xl font-vibes text-verdeOscuro mb-4">Hombres</h3>
            <p className="text-marron mb-4">
                Vestimenta formal de día. Colores sugeridos: marrón claro, azul acero, verde musgo, mostaza, borgoña o gris.
            </p>
            <a
                href="https://pin.it/6HbQBXqCi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center mt-2 bg-cremarustico border-2 border-dorado text-marron px-4 py-2 rounded-lg font-semibold shadow hover:bg-beige transition"
            >
                <PinterestIcon />
                Ver ejemplos
            </a>
            </motion.div>
        </div>

        {/* Nota final */}
        <p className="text-marron mt-10 max-w-3xl mx-auto font-medium">
            <strong>Nota:</strong> Se recomienda evitar el uso de blanco, beige o verde oliva. También sugerimos llevar calzado cómodo y apropiado para césped.
        </p>
        </motion.section>
    );
};

export default DressCode;
