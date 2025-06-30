import Navbar from "./components/moleclues/Navbar";
import Hero from "./components/templates/Hero";
import Bikes from "./components/templates/Bikes";
import Points from "./components/templates/Points";
import Sponsers from "./components/templates/Sponsers";

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="w-full">
      <Hero/>
      <div className="bg-hero-custom">
      <Bikes/>
      <Points/>
      </div>
      <Sponsers/>
    </main>
    </>
  );
}
