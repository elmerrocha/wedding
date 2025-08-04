import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import celebrationAnim from '../assets/celebration.json';

export default function Reception() {
    return (
        <motion.section
        className="text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
        viewport={{ once: true }}
        >
        <Lottie animationData={celebrationAnim} loop className="w-52 h-52 mx-auto" />
        <h2 className="text-6xl font-vibes text-verdeOscuro my-4">Recepción</h2>
        <p className="text-4xl font-vibes mb-3">
            Hacienda El Ensueño<br />Ruitoque Alto
        </p>
        <iframe
            className="mt-6 w-full h-72 rounded-3xl shadow-2xl mb-16"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3959.7174267177547!2d-73.0928383250024!3d7.042456692959644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDInMzIuOCJOIDczwrAwNScyNS4wIlc!5e0!3m2!1sen!2sau!4v1753546809544!5m2!1sen!2sau"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación boda"
        ></iframe>
        </motion.section>
    );
}
