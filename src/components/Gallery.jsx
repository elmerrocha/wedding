import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Lottie from 'lottie-react';

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

    return (
        <motion.section
        className="bg-cremarustico py-16 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        >
        <Lottie path={'/lotties/camera.json'} loop autoplay className="w-80 h-80 mx-auto -mb-24 -mt-24" />
        <h2 className="text-6xl text-center font-vibes text-verdeOscuro mb-10 -mt-24">
            Nuestros momentos
        </h2>
        <div className="overflow-x-auto flex space-x-4 px-4 scrollbar-hide">
            {photos.map((img, i) => (
            <motion.div
                key={i}
                className="bg-white shadow-lg rounded overflow-hidden cursor-pointer w-64 flex-shrink-0"
                style={{ borderBottom: '40px solid #FFFFFF' }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                onClick={() => {
                setIndex(i);
                setOpen(true);
                }}
            >
                <img
                src={img.src}
                alt={`galería ${i + 1}`}
                className="w-full h-72 object-cover"
                />
            </motion.div>
            ))}
        </div>
        <Lightbox open={open} close={() => setOpen(false)} index={index} slides={photos} />
        </motion.section>
    );
};

export default Gallery;