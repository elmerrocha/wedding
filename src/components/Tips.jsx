import React from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';

const tips = [
    {
        icon: '/lotties/clock.json',
        text: 'Por favor llega puntual. Nuestra ceremonia está planeada con mucho amor para que empiece a tiempo ⏰',
    },
    {
        icon: '/lotties/teddy.json',
        text: 'Queremos que este día lo disfruten al máximo, por eso será un evento exclusivo para adultos 🧸❤️',
    },
    {
        icon: '/lotties/envelopeInvitation.json',
        text: 'Por favor confirma tu asistencia lo antes posible. ¡Tu presencia es muy importante para nosotros! 💌',
    },
    {
        icon: '/lotties/party.json',
        text: '¡Queremos que disfrutes, bailes y celebres con nosotros! Será una noche inolvidable 🥳✨',
    },
];

const Tips = () => {
    return (
        <motion.section
        className="bg-cremarustico py-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
        <Lottie path={'/lotties/information.json'} loop autoplay className="w-28 h-28 mx-auto mt-10 mb-6" />
        <h2 className="text-center text-5xl font-vibes text-verdeOscuro mb-10">
            Tips para tener en cuenta
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {tips.map((tip, index) => (
            <motion.div
                key={index}
                className="bg-white p-6 rounded shadow text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
            >
                <Lottie path={tip.icon} loop autoplay className="w-20 h-20 mx-auto mb-4" />
                <p className="text-marron font-medium leading-relaxed">{tip.text}</p>
            </motion.div>
            ))}
        </div>
        </motion.section>
    );
};

export default Tips;
