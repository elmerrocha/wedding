export default function Header() {
    return (
    <header className="py-12 text-center">
        <img
            src={`${import.meta.env.BASE_URL}dye_blue.svg`}
            alt="Daniela & Elmer"
            className="w-80 h-80 mx-auto"
        />
        <p className="font-vibes text-6xl my-20">11 de enero, 2026</p>
    </header>
    );
}