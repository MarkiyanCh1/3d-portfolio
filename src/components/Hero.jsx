import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="w-full h-screen mx-auto">
      <div
        className={`absolute top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5 mb-20`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="z-20">
          <h1 className={`${styles.heroHeadText} text-white w-fit`}>
            Hi, I&apos;m <span className="text-[#915EFF]">Mark</span>
          </h1>
          <p className={`${styles.heroSubText} w-fit mt-2 text-white-100`}>
            I develop amazing <br className="block 2xs:hidden" />
            and usefull Web Apps, <br className="block" />
            cool User Interfaces <br className="block 2xs:hidden" />
            and 3D Visuals.
          </p>
        </div>
      </div>

      <div className="relative top-[60px] w-[75%] my-0 mx-auto lg:w-full lg:h-full overflow-hidden pointer-events-auto select-none">
        <ComputersCanvas />
      </div>

      <div className="relative top-[-180px] pb-[200px] xs:top-[-120px] md:top-[-60px] xl:top-0 xs:bottom-10 bottom-32 w-full flex justify-center items-center select-none">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
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
