import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Countdown() {
    const targetDate = new Date("2026-01-11T03:00:00").getTime();
    const [timeLeft, setTimeLeft] = useState({});

    useEffect(() => {
        const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = targetDate - now;

        setTimeLeft({
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((distance / 1000 / 60) % 60),
            seconds: Math.floor((distance / 1000) % 60),
        });

        if (distance < 0) clearInterval(interval);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <motion.section
        className="text-center bg-cremarustico"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
        >
        <img
            src={`${import.meta.env.BASE_URL}poster.webp`}
            alt="Daniela & Elmer"
            className="w-full max-w-xl mx-auto mb-4"
        />
        <h2 className="text-6xl font-vibes text-verdeOscuro mt-20">Faltan...</h2>
        <div className="text-5xl font-vibes text-dorado space-x-4">
            <span>{timeLeft.days} días</span>
            <span>{timeLeft.hours}h</span>
            <span>{timeLeft.minutes}m</span>
            <span>{timeLeft.seconds}s</span>
        </div>
        </motion.section>
    );
}
