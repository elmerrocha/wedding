import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import qrImage from '../assets/qr.webp';
import bankInfo from '../assets/bank.webp'

const Gifts = () => {
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    return (
    <motion.section
        className="bg-cremarustico px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
        >
        <Lottie path={'/lotties/gift.json'} loop autoplay className="w-40 h-40 mx-auto mb-4" />
        <h2 className="text-6xl font-vibes text-verdeOscuro mb-6">Regalos</h2>

        <p className="text-marron font-medium max-w-xl mx-auto mb-6">
            El mejor regalo es compartir este momento con nosotros, pero si deseas hacer un regalo en efectivo,
            habrá un lugar especial donde podrás dejar tu sobre en la recepción. ✉️
        </p>

        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mb">
            <h3 className="font-medium font-bold text-verdeOscuro text-xl mb-2">Transferencia Bancaria</h3>
            <p className="text-marron font-medium"><strong>Banco:</strong> Bancolombia</p>
            <p className="text-marron font-medium"><strong>Tipo de cuenta:</strong> Ahorros</p>

            {/* Número de cuenta con acción de copia */}
            <p
            className="text-marron font-medium cursor-pointer select-none flex items-center justify-center gap-2"
            onClick={() => {
                navigator.clipboard.writeText("91200186848");
                setCopied(true);
                setTimeout(() => setCopied(false), 3000);
            }}
            >
            <strong>Número de cuenta:</strong> 912-001868-48</p>

            {copied && (
                <p className="animate-bounce text-3xl">✔️</p>
            )}

            {copied && (
            <p className="text-verdeClaro text-bold mt-1 animate-pulse">
                ¡Número de cuenta copiado!
            </p>
            )}

            <p className="text-marron font-medium"><strong>A nombre de:</strong> Elmer Rocha</p>
            <p className="text-marron font-medium"><strong>Código QR</strong></p>

            <Lottie path={'/lotties/qrScan.json'} onClick={() => setOpen(true)} loop autoplay className="w-32 h-32 mx-auto" />

            <p className="text-marron font-medium italic mt-4">¡Gracias por tu cariño y generosidad! 💛</p>
        </div>

        <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={[{ src: qrImage }, { src: bankInfo }]}
        />
        </motion.section>
    );
};

export default Gifts;
