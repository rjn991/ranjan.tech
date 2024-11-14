import { useState } from "react";

("use client");
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./components/ui/hero-highlight";
import { FlipWords } from "./components/ui/flip-words";

import Navbar from "./Navbar/Navbar";
import dp from "./assets/profile.png";
function App() {
  const words = ["Web Developer", "Cloud Enthusiast","Linux Hobbyist"];
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar></Navbar>
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="flex p-9 gap-4 sm:gap-20 items-center text-5xl font-bold text-neutral-700 dark:text-white leading-snug sm:leading-relaxed  mx-auto flex-col-reverse md:flex-row sm:flex-row "
          >
            <div className="flex-[1] font-jbmono">
              <p className="text-3xl">Hi there,</p>
              <p className="hidden sm:block">My name is Ranjan</p>
              <p className="block sm:hidden">I'm Ranjan</p>
              <p className="hidden sm:block text-3xl text-neutral-400">I am a <FlipWords words={words} /></p>
              <p className="block sm:hidden text-xl text-neutral-300">I'm a Web Developer and a Linux Enthusiast.</p>
            </div>
            <div className="relative">
              <div className="absolute inset-1 rounded-full bg-gradient-to-b from-blue-900  to-red-900 opacity-50 blur"></div>
              <img
                className="relative block rounded-full max-h-[250px]"
                src={dp}
              ></img>
            </div>
          </motion.h1>
        </HeroHighlight>
      </div>
      <div>Hello</div>
    </>
  );
}

export default App;
