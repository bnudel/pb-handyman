import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import Areas from "@/components/Areas";
import Faq from "@/components/Faq";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import StickyCallBar from "@/components/StickyCallBar";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <Process />
        <Reviews />
        <Areas />
        <Faq />
        <CallToAction />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
