import { useState } from "react";

export default function Rsvp() {
    const [form, setForm] = useState({
    nombre: "",
    asistencia: "Sí",
    acompanantes: "0",
    comentarios: ""
    });
    const [mensaje, setMensaje] = useState("");

    const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nombre.trim()) {
        setMensaje("Por favor, ingresa tu nombre completo.");
    return;
    }

    try {
        const res = await fetch("https://script.google.com/macros/s/AKfycbyOcMaHHrL-X-kHzBRLrMrGG_woxKDPFGymeEO7SB0emy6CN4mRzW1zOfWoRatHDbu7/exec", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
            "Content-Type": "application/json"
        }
        });
        const result = await res.json();
        if (result.success) {
            setMensaje("¡Gracias por confirmar tu asistencia!");
            setForm({ nombre: "", asistencia: "Sí", acompanantes: "0", comentarios: "" });
        } else {
            setMensaje("Hubo un error. Intenta de nuevo más tarde.");
        }
    } catch (err) {
        console.error(err);
        setMensaje("Hubo un error. Intenta de nuevo más tarde.");
    }
    };

    return (
    <section className="bg-cremarustico font-vibes text-verdeOscuro py-16 px-4">
        <h2 className="text-5xl font-vibes text-center mb-8">Confirmar asistencia</h2>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 font-vibes">
        <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Nombre completo"
            required
            className="w-full border border-gray-300 p-3 rounded"
        />

        <select
            name="asistencia"
            value={form.asistencia}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 font-vibes rounded"
        >
            <option value="Sí">🎉 Sí asistiré</option>
            <option value="No">😢 No puedo asistir</option>
        </select>

        <select
            name="acompanantes"
            value={form.acompanantes}
            onChange={handleChange}
            className="w-full border border-gray-300 p-3 rounded font-vibes"
        >
            <option value="0">0 acompañantes</option>
            <option value="1">1 acompañante</option>
            <option value="2">2 acompañantes</option>
            <option value="3">3 acompañantes</option>
        </select>

        <p className="text-sm font-vibes text-marron italic">
            Por favor, selecciona solo el número de acompañantes indicados en tu invitación. 🙏
        </p>

        <textarea
            name="comentarios"
            value={form.comentarios}
            onChange={handleChange}
            placeholder="Comentarios adicionales (opcional)"
            className="w-full border border-gray-300 p-3 rounded font-vibes"
            rows="3"
        />

        <button
            type="submit"
            className="bg-verdeClaro text-white px-6 py-3 rounded hover:bg-verdeOscuro transition font-vibes"
        >
            Enviar confirmación
        </button>
        </form>

        {mensaje && <p className="text-center mt-6 text-lg">{mensaje}</p>}
    </section>
    );
}