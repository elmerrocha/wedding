import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const photos = [
    { src: "/gallery/photo1.webp" },
    { src: "/gallery/photo2.webp" },
    { src: "/gallery/photo3.webp" },
    { src: "/gallery/photo4.webp" },
    { src: "/gallery/photo5.webp" },
];


const Gallery = () => {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const openLightbox = (idx) => {
        setIndex(idx);
        setOpen(true);
    };

    return (
        <section id="galeria" className="bg-[#F7F4ED] py-12">
        <h2 className="text-center text-6xl font-vibes text-[#556B2F] mb-8">
            Nuestros Momentos
        </h2>
        <div className="overflow-x-auto whitespace-nowrap no-scrollbar px-6">
            <div className="inline-flex gap-4">
            {photos.map((photo, idx) => (
                <div
                key={idx}
                onClick={() => openLightbox(idx)}
                className="bg-white shadow-md border border-gray-300 w-64 h-80 rounded-sm p-2 cursor-pointer flex flex-col justify-start items-center"
                >
                <img
                    src={photo.src}
                    alt={`Foto ${idx + 1}`}
                    className="object-cover w-full h-[80%] border border-gray-200"
                />
                <div className="h-[20%] w-full"></div>
                </div>
            ))}
            </div>
        </div>
        <Lightbox open={open} close={() => setOpen(false)} slides={photos} index={index} />
        </section>
    );
};

export default Gallery;