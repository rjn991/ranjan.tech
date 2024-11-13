import { useState } from "react";

("use client");
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./components/ui/hero-highlight";
import dp from "./assets/profile.png"
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <div>nav</div>
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
          className="flex gap-4 md:gap-20 items-center text-5xl font-bold text-neutral-700 dark:text-white leading-snug sm:leading-relaxed  mx-auto flex-col-reverse md:flex-row sm:flex-row "
          >
          <div className="flex-[1]">
            <p> Hello,<br></br>I am Ranjan</p>
           
          </div>
          <div className="">
            <img className=" block rounded-full max-h-[200px]" src={dp}></img>
          </div>
        </motion.h1>
      </HeroHighlight>
      <div>nav</div>
    </div>
  );
}

export default App;