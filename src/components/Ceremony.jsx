import { motion } from 'framer-motion';
import churchAnim from '../assets/church.json';
import Lottie from 'lottie-react';

export default function Ceremony() {
    return (
        <motion.section
        className="text-center px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8 }}
        viewport={{ once: true }}
        >
        <img
            src={`${import.meta.env.BASE_URL}church.webp`}
            alt="Church"
            className="w-full max-w-xl mx-auto mb-10"
        />
        <Lottie animationData={churchAnim} loop className="w-52 h-52 mx-auto" />
        <h2 className="text-6xl font-vibes text-verdeOscuro my-4">Ceremonia</h2>
        <p className="text-4xl font-vibes">
            Casa Sacerdotal San José<br />Floridablanca, Colombia
        </p>
        <p className="text-3xl font-vibes my-3">3:00 p.m.</p>
        <iframe
            className="mt-6 w-full h-72 rounded-3xl shadow-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.574566732142!2d-73.08221062381509!3d7.059169916704308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e68410fc1f26775%3A0x567abbaee50e1ea5!2sCasa%20Sacerdotal%20San%20Jos%C3%A9!5e0!3m2!1ses!2sco!4v1753603473043!5m2!1ses!2sco"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación boda"
        ></iframe>
        </motion.section>
    );
}
