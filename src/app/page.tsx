import Navbar from "./components/moleclues/Navbar";
import Hero from "./components/templates/Hero";
import Bikes from "./components/templates/Bikes";

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className="w-full">
      <Hero/>
      <Bikes/>

    </main>
    </>
  );
}
