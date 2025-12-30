import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import giftAnim from '../assets/gift.json';
import qrImage from '../assets/qr.webp';
import qrScan from '../assets/qrScan.json';
import bankInfo from '../assets/bank.webp';
import brebLogo from '../assets/breb-logo.svg';

const Gifts = () => {
    const [open, setOpen] = useState(false);
    const [copiedAccount, setCopiedAccount] = useState(false);
    const [copiedBreB, setCopiedBreB] = useState(false);

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

        <p className="text-marron font-medium max-w-xl mx-auto mb-6">
            El mejor regalo es compartir este momento con nosotros, pero si deseas hacer un regalo en efectivo,
            habrá un lugar especial donde podrás dejar tu sobre en la recepción. ✉️
        </p>

        <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto mb-8">
            <h3 className="font-medium font-bold text-verdeOscuro text-xl mb-2">
            Transferencia Bancaria
            </h3>

            <div
                className="cursor-pointer select-none flex items-center justify-center gap-2 text-marron font-medium"
                onClick={() => {
                navigator.clipboard.writeText('0091156515');
                setCopiedBreB(true);
                setCopiedAccount(false);
                setTimeout(() => setCopiedBreB(false), 3000);
                }}
            >
                <img
                    src={brebLogo}
                    alt="Bre-B"
                    className="w-10 h-10 rounded-full object-contain"
                />
                <span>
                    <strong>0091156515</strong>
                </span>
            </div>

            {copiedBreB && (
                <>
                <p className="animate-bounce text-3xl mt-1">✔️</p>
                <p className="text-verdeClaro font-bold mt-1 animate-pulse">
                    ¡Llave Bre-B copiada!
                </p>
                </>
            )}

            <p className="text-marron font-medium">
            <strong>Banco:</strong> Bancolombia
            </p>
            <p className="text-marron font-medium">
            <strong>Tipo de cuenta:</strong> Ahorros
            </p>

            {/* Número de cuenta con acción de copia */}
            <p
            className="text-marron font-medium cursor-pointer select-none flex items-center justify-center gap-2 mt-1"
            onClick={() => {
                navigator.clipboard.writeText('91200186848');
                setCopiedAccount(true);
                setCopiedBreB(false);
                setTimeout(() => setCopiedAccount(false), 3000);
            }}
            >
            <strong>Número de cuenta:</strong> 912-001868-48
            </p>

            {copiedAccount && (
            <>
                <p className="animate-bounce text-3xl mt-1">✔️</p>
                <p className="text-verdeClaro font-bold mt-1 animate-pulse">
                ¡Número de cuenta copiado!
                </p>
            </>
            )}

            <p className="text-marron font-medium mt-2">
            <strong>A nombre de:</strong> Elmer Rocha
            </p>

            <p className="text-marron font-medium mt-4">
            <strong>Código QR</strong>
            </p>

            <Lottie
            animationData={qrScan}
            onClick={() => setOpen(true)}
            loop
            className="w-32 h-32 mx-auto cursor-pointer"
            />

            <p className="text-marron font-medium italic mt-4">
            ¡Gracias por tu cariño y generosidad! 💛
            </p>
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
