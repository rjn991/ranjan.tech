import { useState } from "react";
("use client");
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./components/ui/hero-highlight";
import { FlipWords } from "./components/ui/flip-words";
import { Meteors } from "./components/ui/meteors";

import Navbar from "./Navbar/Navbar";
import dp from "./assets/profile.png";
import github from "./assets/github.svg";
import resume from "./assets/resume.svg";

// project images
import guessit from "./assets/guessit.png";
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

      <div className="bg-gray-950 font-jbmono pt-10">
        <p className="text-center text-white text-3xl">
          Things I fiddle with...
        </p>
        <div className="flex flex-wrap p-10 sm:gap-10 gap-6 justify-center items-center text-center text-gray-950">
          <div className=" hover:bg-slate-800 rounded-xl p-3 hover:text-gray-300">
            <img
              className="h-24"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
            />
            <p className="cursor-default pt-1">HTML5</p>
          </div>
          <div className=" hover:bg-slate-800 rounded-xl p-3 hover:text-gray-300">
            <img
              className="h-24"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
            />
            <p className="cursor-default pt-1">CSS3</p>
          </div>
          <div className=" hover:bg-slate-800 rounded-xl p-3 hover:text-gray-300">
            <img
              className="h-24"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            />
            <p className="cursor-default pt-1">JavaScript</p>
          </div>
          <div className=" hover:bg-slate-800 rounded-xl p-3 hover:text-gray-300">
            <img
              className="h-24"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            />
            <p className="cursor-default pt-1">React</p>
          </div>
          <div className=" hover:bg-slate-800 rounded-xl p-3 hover:text-gray-300">
            <img
              className="h-24"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
            />
            <p className="cursor-default pt-1">Tailwind</p>
          </div>
          <div className=" hover:bg-slate-800 rounded-xl p-3 hover:text-gray-300">
            <img
              className="h-24"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
            />
            <p className="cursor-default pt-1">NodeJS</p>
          </div>
          <div className=" hover:bg-slate-800 rounded-xl p-3 hover:text-gray-300">
            <img
              className="h-24"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
            />
            <p className="cursor-default pt-1">MongoDB</p>
          </div>
          <div className=" hover:bg-slate-800 rounded-xl p-3 hover:text-gray-300">
            <img
              className="h-24"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg"
            />
            <p className="cursor-default pt-1">Firebase</p>
          </div>
          <div className=" hover:bg-slate-800 rounded-xl p-3 hover:text-gray-300">
            <img
              className="h-24"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            />
            <p className="cursor-default pt-1">Python</p>
          </div>
          <div className=" hover:bg-slate-800 rounded-xl p-3 hover:text-gray-300">
            <img
              className="h-24"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg"
            />
            <p className="cursor-default pt-1">Azure</p>
          </div>
          <div className=" hover:bg-slate-800 rounded-xl p-3 hover:text-gray-300">
            <img
              className="h-24"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            />
            <p className="cursor-default pt-1">AWS</p>
          </div>
          <div className=" hover:bg-slate-800 rounded-xl p-3 hover:text-gray-300">
            <img
              className="h-24"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
            />
            <p className="cursor-default pt-1">GNU/Linux</p>
          </div>
        </div>
      </div>

      <div className="font-jbmono py-10 px-5 sm:px-10 w-full  bg-black dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <p className="text-center text-white text-3xl pb-10">Projects</p>

        <div class="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          <div className=" w-full relative">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-start">
              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                GuessIt
              </h1>
              <div >
                <img className="rounded-xl" src={guessit}></img>
              </div>
              <p className="font-normal text-base text-slate-500 my-4 relative z-50">
                I don&apos;t know what to write so I&apos;ll just paste
                something cool here. One more sentence because lorem ipsum is
                just unacceptable. Won&apos;t ChatGPT the shit out of this.
              </p>
              <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                Explore
              </button>
            </div>
          </div>
          <div className=" w-full relative">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-start">
              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                GuessIt
              </h1>

              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                I don&apos;t know what to write so I&apos;ll just paste
                something cool here. One more sentence because lorem ipsum is
                just unacceptable. Won&apos;t ChatGPT the shit out of this.
              </p>

              <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                Explore
              </button>
            </div>
          </div>
          <div className=" w-full relative">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-start">
              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                GuessIt
              </h1>

              <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                I don&apos;t know what to write so I&apos;ll just paste
                something cool here. One more sentence because lorem ipsum is
                just unacceptable. Won&apos;t ChatGPT the shit out of this.
              </p>

              <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
