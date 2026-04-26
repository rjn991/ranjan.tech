import { SparklesCore } from "../components/ui/sparkles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedinIn,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import  OnlyFans from "../assets/onlyfans.png";
const Footer = () => {
  return (
    <>
      <div className="p-5 relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
        <div className="font-jbmono text-white z-20 flex gap-10 text-2xl">
          <a href="https://github.com/rjn991" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.linkedin.com/in/rjn991/" target="_blank">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href="mailto:ranjanht991@gmail.com" target="_blank">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://t.me/rjn991" target="_blank">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
          <div className="flex items-center gap-1">
            <a href="https://i.pinimg.com/originals/0d/e6/02/0de602fa36a8846d57beab58e2ed5fd7.gif" target="_blank">
              <img src={OnlyFans} alt="OnlyFans" className="h-5" />
            </a>
          </div>
        </div>
        <div className="font-jbmono text-white text-center mt-2">
          <p>© 2026 Ranjan H T. All rights reserved.</p>
        </div>
        <div className="w-full absolute inset-0 h-screen">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={10}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      </div>
    </>
  );
};
export default Footer;
