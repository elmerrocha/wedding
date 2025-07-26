import Header from "./components/Header";
import Story from "./components/Story";
import Ceremony from "./components/Ceremony";
import DressCode from "./components/DressCode";
import Countdown from "./components/Countdown";
import Gallery from "./components/Gallery";
import RSVPForm from "./components/RSVPForm";
import Footer from "./components/Footer";
import Reception from "./components/Reception";

export default function App() {
  return (
    <div className="font-sans bg-sky-100 text-gray-800">
      <Header />
      <main className="space-y-24 p-4 max-w-4xl mx-auto">
        <Countdown />
        {/* <Story /> */}
        {/* <Gallery /> */}
        <img
          src={`${import.meta.env.BASE_URL}church.webp`}
          alt="Church"
          className="w-full max-w-xl mx-auto"
        />
        <Ceremony />
        {/* <DressCode /> */}
        {/* <RSVPForm /> */}
        <Reception />
      </main>
      <Footer />
    </div>
  );
}