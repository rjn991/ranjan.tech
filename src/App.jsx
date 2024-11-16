import { useState } from "react";
("use client");
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./components/ui/hero-highlight";
import { FlipWords } from "./components/ui/flip-words";
import { Meteors } from "./components/ui/meteors";
import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import dp from "./assets/profile.png";
import blackdp from "./assets/dp.png"
import github from "./assets/github.svg";
import resume from "./assets/resume.svg";

// project images
import githubp from "./assets/github-project.svg";
import filep from "./assets/file.svg";
import linkp from "./assets/link-project.svg";
import guessit from "./assets/guessit.png";
import portfolio from "./assets/portfolio.png";
import picochat from "./assets/picochat.png";
import chatbase from "./assets/chatbase.png";
import oldPortfolio from "./assets/oldportfolio.png";
import earbio from "./assets/earbio.png";
import leafopedia from "./assets/leafopedia.png";
import hyprland from "./assets/hyprland.png";
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
              <a href="https://github.com/rjn991" target="_blank" className="mr-5">
                <div className="cursor-pointer inline-flex py-2 px-5 text-base animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <img src={github} className="w-6 mr-2"></img>Github
                </div>
              </a>
              <a href="https://ranjan.tech/resume" target="_blank">
                <div className="cursor-pointer inline-flex py-2 px-5 text-base animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                  <img src={resume} className="w-6 mr-2"></img>Resume
                </div>
              </a>
            </div>
            <div className="relative">
              <div className="absolute inset-1 rounded-full bg-gradient-to-b from-blue-900  to-red-900 opacity-50 blur"></div>
              <img
                className="relative block rounded-full max-h-[250px] sm:max-h-[300px] bg-black"
                src={blackdp}
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

        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          <div className=" w-full relative">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-start">
              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                GuessIt
              </h1>
              <div>
                <img className="rounded-xl" src={guessit}></img>
              </div>
              <p className="font-normal text-base text-slate-500 my-4 relative z-50">
                Song guessing game made using React and Youtube Data API.
              </p>
              <div className="flex gap-5 mt-auto justify-end items-center w-full">
                <a href="https://github.com/rjn991/guessIt" target="_blank">
                  <img className="w-6" src={githubp}></img>
                </a>
                <a href="https://guessit2.vercel.app/" target="_blank">
                  <img className="w-6" src={linkp}></img>
                </a>
              </div>
            </div>
          </div>
          <div className=" w-full relative">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-start">
              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                Portfolio
              </h1>
              <div>
                <img className="rounded-xl" src={portfolio}></img>
              </div>
              <p className="font-normal text-base text-slate-500 my-4 relative z-50">
                This portfolio, made using React and Tailwind.
              </p>
              <div className="flex gap-5 mt-auto justify-end items-center w-full">
                <a>
                  <img className="w-6" src={githubp}></img>
                </a>
                <a>
                  <img className="w-6" src={linkp}></img>
                </a>
              </div>
            </div>
          </div>
          <div className=" w-full relative">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-start">
              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                PicoChat
              </h1>
              <div>
                <img className="rounded-xl" src={picochat}></img>
              </div>
              <p className="font-normal text-base text-slate-500 my-4 relative z-50">
                A real-time chatroom made using Firebase and PicoCSS.
              </p>
              <div className="flex gap-5 mt-auto justify-end items-center w-full">
                <a href="https://github.com/rjn991/picochat" target="_blank">
                  <img className="w-6" src={githubp}></img>
                </a>
                <a href="https://picochat-7f8cb.firebaseapp.com" target="_blank">
                  <img className="w-6" src={linkp}></img>
                </a>
              </div>
            </div>
          </div>
          <div className=" w-full relative">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-start">
              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                ChatBase
              </h1>
              <div>
                <img className="rounded-xl" src={chatbase}></img>
              </div>
              <p className="font-normal text-base text-slate-500 my-4 relative z-50">
                Yet another chatroom, but made using LAMP stack.
              </p>
              <div className="flex gap-5 mt-auto justify-end items-center w-full">
                <a href="https://github.com/rjn991/chatbase" target="_blank">
                  <img className="w-6" src={githubp}></img>
                </a>
                <a href="https://chatbase.ranjan.tech" target="_blank">
                  <img className="w-6" src={linkp}></img>
                </a>
              </div>
            </div>
          </div>
          <div className=" w-full relative">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-start">
              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                Retired Portfolio
              </h1>
              <div>
                <img className="rounded-xl" src={oldPortfolio}></img>
              </div>
              <p className="font-normal text-base text-slate-500 my-4 relative z-50">
                My old portfolio, cooked using raw HTML and CSS.
              </p>
              <div className="flex gap-5 mt-auto justify-end items-center w-full">
                <a href="https://github.com/rjn991/ranjan.tech" target="_blank">
                  <img className="w-6" src={githubp}></img>
                </a>
                <a href="https://ranjan.tech" target="_blank">
                  <img className="w-6" src={linkp}></img>
                </a>
              </div>
            </div>
          </div>
          <div className=" w-full relative">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-start">
              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                Ear Biometrics
              </h1>
              <div>
                <img className="rounded-xl" src={earbio}></img>
              </div>
              <p className="font-normal text-base text-slate-500 my-4 relative z-50">
                Built an ML model to recognize individuals based on their ear
                patterns.
              </p>
              <div className="flex gap-5 mt-auto justify-end items-center w-full">
                <a href="https://github.com/rjn991/earBasedPersonRecognition" target="_blank">
                  <img className="w-6" src={githubp}></img>
                </a>
                <a href="https://raw.githubusercontent.com/rjn991/earBasedPersonRecognition/main/ear_biometcics.pdf" target="_blank">
                  <img className="w-6" src={filep}></img>
                </a>
              </div>
            </div>
          </div>
          <div className=" w-full relative">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-start">
              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                Leafopedia
              </h1>
              <div>
                <img className="rounded-xl" src={leafopedia}></img>
              </div>
              <p className="font-normal text-base text-slate-500 my-4 relative z-50">
                Built a CNN model and a Flask web app to retrieve plant
                information using leaf images.
              </p>
              <div className="flex gap-5 mt-auto justify-end items-center w-full">
                <a href="https://github.com/rjn991/leafopedia" target="_blank">
                  <img className="w-6" src={githubp}></img>
                </a>
                <a href="https://raw.githubusercontent.com/rjn991/leafopedia/main/leafopedia.pdf" target="_blank">
                  <img className="w-6" src={filep}></img>
                </a>
              </div>
            </div>
          </div>
          <div className=" w-full relative">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-start">
              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                My Linux Setup
              </h1>
              <div>
                <img className="rounded-xl" src={hyprland}></img>
              </div>
              <p className="font-normal text-base text-slate-500 my-4 relative z-50">
                This is my favourite hobby, customizing window managers. This
                repo contains the dotfiles of my Hyprland setup. And I use Arch
                BTW.
              </p>
              <div className="flex gap-5 mt-auto justify-end items-center w-full">
                <a href="https://github.com/rjn991/hyprland-dots" target="_blank">
                  <img className="w-6" src={githubp}></img>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
export default App;
