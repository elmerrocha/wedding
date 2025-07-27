import Header from "./components/Header";
import Ceremony from "./components/Ceremony";
import Countdown from "./components/Countdown";
import Footer from "./components/Footer";
import Reception from "./components/Reception";

export default function App() {
  return (
    <div className="bg-cremarustico text-verdeOscuro min-h-screen">
      <Header />
      <main className="space-y-24 p-4 max-w-4xl mx-auto">
        <Countdown />
        <img
          src={`${import.meta.env.BASE_URL}church.webp`}
          alt="Church"
          className="w-full max-w-xl mx-auto"
        />
        <Ceremony />
        <Reception />
      </main>
      <Footer />
    </div>
  );
}