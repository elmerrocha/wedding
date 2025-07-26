import Header from "./components/Header";
import Story from "./components/Story";
import Location from "./components/Location";
import DressCode from "./components/DressCode";
import Countdown from "./components/Countdown";
import Gallery from "./components/Gallery";
import RSVPForm from "./components/RSVPForm";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans bg-sky-100 text-gray-800">
      <Header />
      <main className="space-y-24 p-4 max-w-4xl mx-auto">
        <img className="w-80 h-80 mx-auto" src="/dye_blue.svg" alt="DyE"/>
        <Countdown />
        {/* <Story /> */}
        {/* <Gallery /> */}
        <Location />
        <DressCode />
        <RSVPForm />
      </main>
      <Footer />
    </div>
  );
}