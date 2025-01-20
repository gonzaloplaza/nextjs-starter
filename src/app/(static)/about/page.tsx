"use client";

import { RemoteContent } from "@/components/remote-content";

const About = () => {
  const aboutUri = "/api/about";
  return <RemoteContent uri={aboutUri} />;
};

export default About;
