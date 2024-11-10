// src/app/page.tsx
import React from "react";
import Hero from "@/components/Hero";
import Literacy from "@/components/Literacy";
import Donation from "@/components/Donation";
import Children from "@/components/Children";
import Quote from "@/components/Quote";
import Education from "@/components/Education";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <Literacy />
      <Donation/>
      <Children/>
      <Quote/>
      <Education/>
      <Footer/>
      {/* Other components go here */}
    </div>
  );
};

export default Home;
