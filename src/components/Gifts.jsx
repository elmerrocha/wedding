import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import giftAnim from '../assets/gift.json';
import qrImage from '../assets/qr.webp';
import qrScan from '../assets/qrScan.json'

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
            <Lottie animationData={giftAnim} loop className="w-40 h-40 mx-auto mb-4" />
            <h2 className="text-6xl font-vibes text-verdeOscuro mb-6">Regalos</h2>

            <p className="text-marron font-vibes max-w-xl mx-auto mb-6 text-3xl">
                El mejor regalo es compartir este momento con nosotros, pero si deseas hacer un regalo en efectivo,
                habrá un lugar especial donde podrás dejar tu sobre en la recepción. 🧧
            </p>

            <div className="bg-white shadow-md rounded-2xl p-6 max-w-md mx-auto border-2 border-[#DEB887]">
                <h3 className="font-medium font-semibold text-verdeOscuro mb-2">Transferencia Bancaria</h3>
                <p className="text-marron font-medium"><strong>Banco:</strong> Bancolombia</p>
                <p className="text-marron font-medium"><strong>Tipo de cuenta:</strong> Ahorros</p>
                <p
                className="text-marron font-medium cursor-pointer hover:underline"
                onClick={() => {
                    navigator.clipboard.writeText("91200186848");
                    setCopied(true);
                    setTimeout(() => setCopied(false), 3000);
                }}
                >
                <strong>Número de cuenta:</strong> 912-001868-48
                </p>
                {copied && (
                <p className="text-verdeClaro text-sm mt-1 animate-pulse">
                    ¡Número de cuenta copiado!
                </p>
                )}
                <p className="text-marron font-medium"><strong>A nombre de:</strong> Elmer Rocha</p>
                <p className="text-marron font-medium"><strong>Código QR</strong></p>
                <Lottie animationData={qrScan} onClick={() => setOpen(true)} loop className="w-32' h-32 mx-auto" />
                <p className="text-marron font-medium italic mt-4">¡Gracias por tu cariño y generosidad! 💛</p>
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                slides={[{ src: qrImage }]}
            />
        </motion.section>
    );
};

export default Gifts;
