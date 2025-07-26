export default function RSVPForm() {
    return (
        <section className="text-center px-4">
        <h2 className="text-3xl font-semibold text-sky-800 mb-6">Confirmar asistencia</h2>
        <form className="space-y-4 max-w-md mx-auto">
            <input
            type="text"
            placeholder="Nombre completo"
            className="w-full px-4 py-2 border rounded-md"
            />
            <input
            type="email"
            placeholder="Correo electrónico"
            className="w-full px-4 py-2 border rounded-md"
            />
            <select className="w-full px-4 py-2 border rounded-md">
            <option value="">¿Asistirás?</option>
            <option value="sí">Sí, con gusto 🎉</option>
            <option value="no">No podré asistir 😢</option>
            </select>
            <button
            type="submit"
            className="bg-sky-600 text-white px-6 py-2 rounded-md hover:bg-sky-700"
            >
            Enviar confirmación
            </button>
        </form>
        </section>
    );
}