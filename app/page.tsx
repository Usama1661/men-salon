import { Suspense } from "react";
import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { About } from "@/components/sections/About";
import { Barbers } from "@/components/sections/Barbers";
import { Booking } from "@/components/sections/Booking";
import { Contact } from "@/components/sections/Contact";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { Membership } from "@/components/sections/Membership";
import { Services } from "@/components/sections/Services";
import { SocialGallery } from "@/components/sections/SocialGallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { VideoExperience } from "@/components/sections/VideoExperience";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <VideoExperience />
        <Gallery />
        <Barbers />
        <Booking />
        <Suspense fallback={<div className="min-h-[28rem] bg-ink" />}>
          <Testimonials />
        </Suspense>
        <Membership />
        <SocialGallery />
        <Contact />
      </main>
      <Footer year={2026} />
    </>
  );
}
