import { useState } from "react";
("use client");
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./components/ui/hero-highlight";
import { FlipWords } from "./components/ui/flip-words";

import Navbar from "./Navbar/Navbar";
import dp from "./assets/profile.png";
import github from "./assets/github.svg";
import resume from "./assets/resume.svg";
function App() {
  const words = ["Web Developer", "Cloud Enthusiast", "Linux Hobbyist"];
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
            className="flex p-9 gap-4 sm:gap-20 items-center text-[3.2rem] font-bold text-neutral-700 dark:text-white leading-snug sm:leading-relaxed  mx-auto flex-col-reverse md:flex-row sm:flex-row "
          >
            <div className="flex-[1] font-jbmono">
              <p className="text-3xl sm:text-4xl">Hi there,</p>
              <p className="hidden sm:block">My name is Ranjan</p>
              <p className="block text-4xl sm:hidden">I'm Ranjan</p>
              <div className="hidden sm:block text-4xl text-neutral-400">
                I am a <FlipWords words={words} />
              </div>
              <p className="block sm:hidden text-xl text-neutral-300">
                I'm a Web Developer and a Linux Enthusiast.
              </p>
              <div className="cursor-pointer inline-flex mr-5 py-2 px-5 text-base animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <img src={github} className="w-6 mr-2"></img>Github
              </div>
              <div className="cursor-pointer inline-flex py-2 px-5 text-base animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <img src={resume} className="w-6 mr-2"></img>Resume
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-1 rounded-full bg-gradient-to-b from-blue-900  to-red-900 opacity-50 blur"></div>
              <img
                className="relative block rounded-full max-h-[250px] sm:max-h-[300px]"
                src={dp}
              ></img>
            </div>
          </motion.h1>
        </HeroHighlight>
      </div>
      <div className="bg-gray-950 font-jbmono py-10">
        <p className="text-center text-white text-3xl">
          Things I fiddle with...
        </p>
        <div className="flex p-10 gap-6">
          <img
            className="h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
          />
          <img
            className="h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          />
          <img
            className="h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
          />
          <img
            className="h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
          />

          <img
            className="h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          />

          <img
            className="h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
          />

          <img
            className="h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
          />

          <img
            className="h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          />

          <img
            className="h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
          />

          <img
            className="h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
          />

          <img
            className="h-24"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
          />
        </div>
      </div>
      
    </>
  );
}
export default App;
