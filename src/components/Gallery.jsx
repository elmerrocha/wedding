export default function Gallery() {
    return (
    <section className="text-center px-4">
        <h2 className="text-3xl font-semibold text-sky-800 mb-6">Momentos especiales</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img src="https://source.unsplash.com/600x400/?couple,1" alt="moment 1" className="rounded-lg shadow-md" />
        <img src="https://source.unsplash.com/600x400/?wedding,2" alt="moment 2" className="rounded-lg shadow-md" />
        <img src="https://source.unsplash.com/600x400/?engagement,3" alt="moment 3" className="rounded-lg shadow-md" />
        <img src="https://source.unsplash.com/600x400/?love,4" alt="moment 4" className="rounded-lg shadow-md" />
        <img src="https://source.unsplash.com/600x400/?wedding,5" alt="moment 5" className="rounded-lg shadow-md" />
        <img src="https://source.unsplash.com/600x400/?bride,6" alt="moment 6" className="rounded-lg shadow-md" />
        </div>
    </section>
    );
}