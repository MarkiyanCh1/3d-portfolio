import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

import { socials } from "../constants";
import { telegram } from "../assets";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { Tilt } from "react-tilt";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Markiyan",
          from_email: form.email,
          to_email: "markiyan.chornovil@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  const googleDriveLink =
    "https://drive.google.com/file/d/16svVnLh3gXRQpRIxBWrIY30LX8ArkGgc/view?usp=drive_link";

  const handleOpenClick = () => {
    window.open(googleDriveLink, "_blank");
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 ">
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <motion.div variants={slideIn("left", "tween", 0.2, 1)}>
          <p className={styles.sectionSubText}>Get in touch</p>
          <div className="block xl:hidden">
            <h3 className={`${styles.sectionHeadText} text-center `}>
              Contact Me.
            </h3>

            <Tilt
              options={{
                max: 45,
                scale: 1,
                speed: 450,
              }}
            >
              <div className="mt-4 max-w-[600px] xl:max-w-[400px] bg-slate-700 p-8 mx-auto rounded-2xl">
                <div className="flex flex-col items-center gap-2">
                  <div className="flex flex-col w-[315px] gap-2">
                    <div className="flex items-center flex-col xs:flex-row gap-2">
                      <p className="font-bold">Email me: </p>
                      <a
                        href={`mailto:markiyan.chornovil@gmail.com`}
                        className="flex items-center text-[12px] 2xs:text-sm"
                      >
                        markiyan.chornovil@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center flex-col xs:flex-row gap-2">
                      <p className="font-bold">Call me: </p>
                      <div className="flex flex-row gap-2">
                        <a
                          href={`tel:+48792886702`}
                          className="flex items-center text-[12px] 2xs:text-sm"
                        >
                          +48792886702
                        </a>
                        <p className=" flex items-center text-[12px] 2xs:text-sm">
                          or my
                        </p>
                        <Link
                          to="http://t.me/MarkChornovil"
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <img
                            src={telegram}
                            alt="telegram"
                            className="h-6 w-6"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <ul className="list-none flex flex-col items-center xs:items-start w-[315px] gap-2">
                    {socials.map((social, index) => (
                      <li
                        key={social.name}
                        className="text-secondary w-fit flex flex-row font-poppins font-medium cursor-pointer text-[16px] opacity-80 hover:opacity-100 transition"
                      >
                        <p
                          className={`${
                            index === 0 ? "pr-2 xs:pr-[69px]" : "pr-2 xs:pr-20"
                          } text-sm xs:text-base`}
                        >{`Find me on ${social.name}:`}</p>
                        <Link
                          to={social.link}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <img
                            src={social.icon}
                            alt={social.name}
                            className="h-6 w-6"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-row">
                    <button
                      className="bg-tertiary py-4 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                      onClick={handleOpenClick}
                    >
                      My CV
                    </button>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>

          <h3
            className={`${styles.sectionHeadText} mt-12 xl:mt-0 text-center `}
          >
            Message Me.
          </h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </Tilt>

      <motion.div
        variants={slideIn("down", "tween", 0.2, 1)}
        className="xl:flex-1 xl:relative xl:top-[170px] xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>

      <motion.div variants={slideIn("down", "tween", 0.2, 1)}>
        <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="w-[578px] bg-slate-800 hidden xl:block absolute right-[100px] p-4 rounded-2xl"
        >
          <div>
            <h3
              className={`${styles.sectionHeadText} leading-none pb-4 text-center `}
            >
              Contact Me.
            </h3>

            <div className="max-w-[600px] bg-slate-700 p-4 mx-auto rounded-2xl">
              <div className="flex flex-col items-center gap-2">
                <div className="flex flex-row gap-2">
                  <div className="flex items-center flex-col xs:flex-row gap-2">
                    <a
                      href={`mailto:markiyan.chornovil@gmail.com`}
                      className="flex items-center text-[12px] 2xs:text-sm hover:text-violet-600"
                    >
                      markiyan.chornovil@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center flex-col xs:flex-row gap-2">
                    <div className="flex flex-row gap-2">
                      <a
                        href={`tel:+48792886702`}
                        className="flex items-center text-[12px] 2xs:text-sm hover:text-violet-600"
                      >
                        +48792886702
                      </a>
                      <p className=" flex items-center text-[12px] 2xs:text-sm">
                        or my
                      </p>
                      <Link
                        to="http://t.me/MarkChornovil"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        <img
                          src={telegram}
                          alt="telegram"
                          className="h-6 w-6"
                        />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row">
                  <p className="socials-text text-sm xs:text-base pr-5">
                    Find me on:
                  </p>
                  <ul className="list-none flex flex-row items-center xs:items-start gap-2">
                    {socials.map((social) => (
                      <li
                        key={social.name}
                        className="text-secondary w-fit flex flex-row font-poppins font-medium cursor-pointer text-[16px] opacity-80 hover:opacity-100 transition"
                        onMouseEnter={() =>
                          (document.querySelector(".socials-text").style.color =
                            "#7c3aed")
                        }
                        onMouseLeave={() =>
                          (document.querySelector(".socials-text").style.color =
                            null)
                        }
                      >
                        <Link
                          to={social.link}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <img
                            src={social.icon}
                            alt={social.name}
                            className="h-6 w-6"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-row">
                  <button
                    className="bg-tertiary py-4 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                    onClick={handleOpenClick}
                  >
                    My CV
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Tilt>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
