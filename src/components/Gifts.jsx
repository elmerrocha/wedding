import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import giftAnim from '../assets/gift.json';

const Gifts = () => {
    return (
        <motion.section
        className="bg-cremarustico px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
        >
        <Lottie animationData={giftAnim} loop className="w-40 h-40 mx-auto mb-4" />
        <h2 className="text-6xl font-vibes text-verdeOscuro mb-6">Regalos</h2>

        <p className="text-marron font-vibes max-w-xl mx-auto mb-6 text-3xl">
            El mejor regalo es compartir este momento con nosotros, pero si deseas tener un detalle,
            habrá un lugar especial donde podrás dejar tu sobre en la recepción. 🧧
        </p>

        <div className="bg-white shadow-md rounded-2xl p-6 max-w-md mx-auto border-2 border-[#DEB887]">
            <h3 className="font-medium font-semibold text-verdeOscuro mb-2">Transferencia Bancaria</h3>
            <p className="text-marron font-medium"><strong>Banco:</strong> Bancolombia</p>
            <p className="text-marron font-medium"><strong>Tipo de cuenta:</strong> Ahorros</p>
            <p className="text-marron font-medium"><strong>Número de cuenta:</strong> 01234567890</p>
            <p className="text-marron font-medium"><strong>A nombre de:</strong> Elmer Rocha</p>
            <p className="text-marron font-medium italic mt-4">¡Gracias por tu cariño y generosidad! 💛</p>
        </div>
        </motion.section>
    );
};

export default Gifts;
