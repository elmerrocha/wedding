import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import envelopeAnim from '../assets/envelope.json';

const Rsvp = () => {
    const [formData, setFormData] = useState({
        name: '',
        attendance: '',
        guests: '0',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name) {
        setStatus('Por favor, ingresa tu nombre.');
        return;
        }

        try {
        const response = await fetch(
            'https://script.google.com/macros/s/AKfycbyOcMaHHrL-X-kHzBRLrMrGG_woxKDPFGymeEO7SB0emy6CN4mRzW1zOfWoRatHDbu7/exec',
            {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
            }
        );
        console.log(response);
        setStatus('¡Gracias por confirmar tu asistencia!');
        setFormData({ name: '', attendance: '', guests: '0', message: '' });
        } catch (error) {
            console.log(error);
            setStatus('Hubo un error. Intenta de nuevo más tarde.');
        }
    };

    return (
        <motion.div
        className="bg-cremarustico pb-12 px-4 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 2.0 }}
        viewport={{ once: true }}
        >
        <Lottie animationData={envelopeAnim} loop className="w-48 h-48 mx-auto mb" />
        <h2 className="text-5xl text-verdeOscuro font-vibes mb-8">Confirmar asistencia</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
            <input
            type="text"
            name="name"
            placeholder="Nombre completo"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border border-beige rounded focus:outline-none focus:ring focus:border-verdeClaro"
            />
            <select
            name="attendance"
            value={formData.attendance}
            onChange={handleChange}
            className="w-full p-3 border border-beige rounded"
            >
            <option value="">Selecciona una opción</option>
            <option value="Si">🎉 Sí asistiré</option>
            <option value="No">😔 No puedo asistir</option>
            </select>
            <select
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            className="w-full p-3 border border-beige rounded"
            >
            <option value="0">0 acompañantes</option>
            <option value="1">1 acompañante</option>
            <option value="2">2 acompañantes</option>
            <option value="3">3 acompañantes</option>
            </select>
            <p className="text-sm italic text-marron">
            Por favor, selecciona solo el número de acompañantes indicados en tu invitación. 🙏
            </p>
            <textarea
            name="message"
            placeholder="Mensaje adicional (opcional)"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border border-beige rounded h-24"
            ></textarea>
            <button
            type="submit"
            className="bg-verdeOscuro text-white px-6 py-2 rounded hover:bg-verdeClaro transition"
            >
            Enviar confirmación
            </button>
        </form>
        {status && <p className="mt-4 text-marron font-semibold">{status}</p>}
        </motion.div>
    );
};

export default Rsvp;
