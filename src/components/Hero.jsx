import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import Typical from "react-typical";
import './css/Hero.css'

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff] " />
          <div className="w-0.5 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m <span className="text-[#915eff]">Harshal</span>
          </h1>
          <p
          id="p_moving"
            className={`${styles.heroSubText} mt-2 text-white-100`}
          >
            <span style={{ color: "white" }}>I am a </span>
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                "Front-end developer",
                500,
                "Back-end developer",
                500,
                "Designer",
                500,
              ]}
            />
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
            <motion.dev
              animate={{
                y: [0, 31, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
