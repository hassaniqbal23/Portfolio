import Image from "next/image";
import Hero from "../../components/Hero";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex  justify-center items-center flex-col sm:px-10 px-5 mx-auto overflow-hidden text-white">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
