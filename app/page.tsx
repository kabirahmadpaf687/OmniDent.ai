import MeetingScheduler from "@/components/MeetingForm";
import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import { Metadata } from "next";
import PatientJourney from "@/components/PatientJaurney";

export const metadata: Metadata = {
  title: "OmniDent.Ai",
  description: "Dental website",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Brands />
      <PatientJourney/>
      <MeetingScheduler />
      <Pricing />
    </>
  );
}
