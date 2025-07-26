import { useEffect, useState } from "react";

export default function Countdown() {
    const targetDate = new Date("2026-01-11T00:00:00").getTime();
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
    <section className="text-center bg-blue-40">
        <h2 className="text-3xl font-semibold text-sky-800 mb-4">Faltan...</h2>
        <div className="text-2xl font-mono text-sky-700 space-x-4">
        <span>{timeLeft.days} días</span>
        <span>{timeLeft.hours}h</span>
        <span>{timeLeft.minutes}m</span>
        <span>{timeLeft.seconds}s</span>
        </div>
    </section>
    );
}