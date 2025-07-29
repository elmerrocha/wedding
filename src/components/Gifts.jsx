import React from 'react';

const Gifts = () => {
    return (
    <section className="bg-cremarustico py-10 px-4 text-center">
        <h2 className="text-6xl font-vibes text-verdeOscuro mb-6">Regalos</h2>

        <p className="text-marron font-vibes max-w-xl mx-auto mb-6 text-3xl">
        El mejor regalo es compartir este momento con nosotros, pero si deseas tener un detalle,
        habrá un lugar especial donde podrás dejar tu sobre en la recepción. 🧧
        </p>

        <div className="bg-white shadow-md rounded-2xl p-6 max-w-md mx-auto border-2 border-[#DEB887]">
        <h3 className="text-3xl font-vibes font-semibold text-verdeOscuro mb-2">Transferencia Bancaria</h3>
        <p className="text-marron font-vibes text-3xl"><strong>Banco:</strong> Bancolombia</p>
        <p className="text-marron font-vibes text-3xl"><strong>Tipo de cuenta:</strong> Ahorros</p>
        <p className="text-marron font-vibes text-3xl"><strong>Número de cuenta:</strong> 01234567890</p>
        <p className="text-marron font-vibes text-3xl"><strong>A nombre de:</strong> Elmer Rocha</p>
        <p className="text-marron  font-vibes text-3xl italic mt-4">¡Gracias por tu cariño y generosidad! 💛</p>
        </div>
    </section>
    );
};

export default Gifts;
