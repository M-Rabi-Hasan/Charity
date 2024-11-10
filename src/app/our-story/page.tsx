// src/app/our-story/page.tsx
import React from "react";
// import Header from "@/components/Header"; // Import Header component
import Footer from "@/components/Footer"; // Import Footer component
import OurStoryHero from "@/components/OurStoryHero";
import Story from "@/components/Story";

const OurStory: React.FC = () => {
  return (
    <div>
      {/* Header */}

      {/* Main Content */}
      <main>
        <OurStoryHero />
        <Story />
        {/* Add more content here if needed */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default OurStory;
