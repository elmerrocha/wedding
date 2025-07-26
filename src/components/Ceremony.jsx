export default function Ceremony() {
    return (
        <section className="text-center px-4">
            <img
                src={`${import.meta.env.BASE_URL}church_icon.svg`}
                alt="Church icon"
                className="w-40 h-40 mx-auto"
            />
        <h2 className="text-6xl font-vibes text-sky-800 my-4">Ceremonia</h2>
        <p className="text-4xl font-vibes">
            Casa Sacerdotal San José<br />Floridablanca, Colombia
        </p>
        <p className="text-3xl font-vibes my-3">3:00 p.m.</p>
        <iframe
            className="mt-6 w-full h-72 rounded-3xl shadow-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.920264274673!2d-73.10624798466963!3d7.069222894901908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e683f92a7b58d0f%3A0xc7408b26c6d3cc44!2sCasa%20Sacerdotal%20San%20Jos%C3%A9!5e0!3m2!1ses!2sco!4v1625017472235!5m2!1ses!2sco"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación boda"
        ></iframe>
        </section>
    );
}