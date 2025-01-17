import Image from "next/image";
import Hero from "../../components/Hero";
import { FloatingNav } from "../../components/ui/FloatingNavbar";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex  justify-center items-center flex-col sm:px-10 px-5 mx-auto overflow-hidden text-white">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
      </div>
    </main>
  );
}
