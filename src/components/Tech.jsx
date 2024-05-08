import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies, technologiesmobile } from "../constants";
import { useEffect, useState } from "react";

const Tech = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div className="relative top-[-120px] md:static md:top-0">
        {isMobile ? (
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologiesmobile.map((technology) => (
              <div
                className="w-28 h-28 pointer-events-none select-none"
                key={technology.name}
              >
                <img src={technology.icon} alt={technology.name} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-row flex-wrap justify-center gap-10">
            {technologies.map((technology) => (
              <div className="w-28 h-28" key={technology.name}>
                <BallCanvas icon={technology.icon} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
