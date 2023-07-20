import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrap } from "./hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // template_mwqy8qp
    // service_urfm8ub
    // okmrvHxnuIgLXn4Zr  public key

    emailjs
      .send(
        "service_urfm8ub",
        "template_mwqy8qp",
        {
          from_name: form.name,
          to_name: "Harshal Honde",
          from_email: form.email,
          to_email: "personaldevelopment@gmail.com",
          message: form.message,
        },
        "okmrvHxnuIgLXn4Zr"
      )
      .then(
        () => {
          setLoading(false);
          alert("Message sent successfully || Harshal will back you soon");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("From your side it is wrong check it again");
        }
      );
  };

  return (
    <>
      <div
        className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>

        <motion.div
          style={{ border: "2px solid #915eff", borderRadius: "5%" }}
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-aqua-100 p-8 rounded-7xl"
        >
          <p className={styles.sectionSubText}>
            <span style={{ color: "#915eff" }}>Contact</span>
          </p>
          <h2 className={styles.sectionHeadText}>
            Share&nbsp;&nbsp;<span style={{ color: "#915eff" }}>Me</span>
          </h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Name</span>
              <input
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid #915eff",
                }}
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Harshal is excited to see your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Email</span>
              <input
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid #915eff",
                }}
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Tell me your mail"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Good Words..</span>
              <textarea
                style={{
                  backgroundColor: "transparent",
                  border: "2px solid #915eff",
                }}
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Share me what you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              style={{
                backgroundColor: "transparent",
                border: "2px solid #915eff",
              }}
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Wait..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrap(Contact, "contact");
