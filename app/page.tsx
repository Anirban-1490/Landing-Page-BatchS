import { ButtonMain } from "@/components/button/button-main";
import { Navbar } from "@/components/navbar/navbar";
import { Features } from "@/view/home/feature/features";
import { Hero } from "@/view/home/hero/hero";
import data from "@/model/data.json";
export default async function Home() {
  return (
    <main className="min-h-screen ">
      <div className="flex flex-col gap-10 w-[87%] mx-auto border border-red-500">
        <Navbar />
        <Hero {...data.hero} />
        <Features />
      </div>
    </main>
  );
}
