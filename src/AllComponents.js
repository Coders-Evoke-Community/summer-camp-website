import React from 'react';
import Hero from "./Components/Hero";
import About from "./Components/About/about";
import Sponsors from "./Components/Sponsors/sponsors";
import Team from "./Components/Team/team";
import Faqs from "./Components/Faqs/faqs";
import Timeline from "./Components/Timeline/timeline";

export default function AllComp() {
  return (
    <div>
      <Hero />
          <About />
          <Timeline />
          <Sponsors />
          <Team />
        <Faqs /> 
    </div>
  )
}
