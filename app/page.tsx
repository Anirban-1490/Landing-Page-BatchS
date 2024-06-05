import { ButtonMain } from "@/components/button/button-main";
import { Navbar } from "@/components/navbar/navbar";
import { Features } from "@/view/home/feature/features";
import { Hero } from "@/view/home/hero/hero";
import data from "@/model/data.json";
import { Gallery } from "@/view/home/gallery/gallery";
import { Testimonial } from "@/view/home/testimonial/testimonial";
import { Pricing } from "@/view/home/pricing/pricing";
import { DownloadMain } from "@/view/home/download-section/download";
import { Footer } from "@/view/home/footer/footer";
export default async function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <div className="flex flex-col gap-[6.5rem] max-md:w-[94%] w-[83%] max-w-[90rem] mx-auto">
        <Navbar />
        <Hero {...data.hero} />
        <Features features={data.features} />
        <Gallery />
        <Testimonial testimonials={data.testimonials} />
        <Pricing plans={data.pricing} />
        <DownloadMain />
        <Footer />
      </div>
    </main>
  );
}
