export default function DressCode() {
    return (
    <section className="text-center px-4 py-16 bg-cremarustico text-verdeOscuro">
        <h2 className="text-6xl font-vibes mb-6">Código de vestimenta</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Mujeres */}
        <div>
            <h3 className="text-4xl font-vibes mb-2">👗 Mujeres</h3>
            <p className="mb-4 font-vibes text-3xl">
            Se sugiere asistir con vestidos en tonos suaves y elegantes, como blanco crema, verde oliva claro y detalles en dorado.
            </p>
            <div className="flex justify-center gap-4">
            <span className="w-10 h-10 rounded-full bg-[#F7F4ED] border-2 border-white" title="Blanco crema"></span>
            <span className="w-10 h-10 rounded-full bg-[#A3A867] border-2 border-white" title="Verde oliva claro"></span>
            <span className="w-10 h-10 rounded-full bg-[#B29700] border-2 border-white" title="Dorado suave"></span>
            </div>
        </div>

        {/* Hombres */}
        <div>
            <h3 className="text-4xl font-vibes mb-2">🤵🏻‍♂️ Hombres</h3>
            <p className="mb-4 font-vibes text-3xl">
            Se recomienda traje beige claro, con detalles en verde oliva oscuro o accesorios en dorado. Zapatos en marrón oscuro.
            </p>
            <div className="flex justify-center gap-4">
            <span className="w-10 h-10 rounded-full bg-[#E8D8C4] border-2 border-white" title="Beige claro"></span>
            <span className="w-10 h-10 rounded-full bg-[#556B2F] border-2 border-white" title="Verde oliva oscuro"></span>
            <span className="w-10 h-10 rounded-full bg-[#5C4033] border-2 border-white" title="Marrón oscuro"></span>
            <span className="w-10 h-10 rounded-full bg-[#B29700] border-2 border-white" title="Dorado suave"></span>
            </div>
        </div>
        </div>

        <p className="mt-10 font-vibes text-lg text-marron max-w-xl mx-auto">
        *Por favor evitar colores oscuros como el negro. Queremos una atmósfera cálida, natural y luminosa.
        </p>
    </section>
    );
}