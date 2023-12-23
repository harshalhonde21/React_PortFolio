import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrap } from "./hoc";
import PropTypes from "prop-types";
import "./css/About.css";

const ServiceCards = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
      >
        <motion.div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
        >
          <img
            src={icon}
            alt={title}
            className="w-20 h-18 object-contain"
          ></img>
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </motion.div>
      </motion.div>
    </Tilt>
  );
};

ServiceCards.propTypes = {
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          <span style={{ color: "#915eff" }}>ABOUT ME</span>
        </p>
        <h2 className={styles.sectionHeadText}>
          Harshal &nbsp;&nbsp;<span style={{ color: "#915eff" }}>Honde</span>
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-6xl leading-[30px] "
      >
        Hello everyone, I'm Harshal Honde, currently pursuing my BTech at SB
        Jain Institute of Technology Management and Research. I'm a MERN Stack
        developer with a strong focus on front-end development, and I also have
        a deep expertise in backend development, particularly in building
        powerful APIs. One of my strengths lies in seamlessly integrating APIs
        into projects, which enhances the overall functionality and user
        experience. Moreover, I'm currently delving into Data Structures and
        Algorithms in C++ to bolster my problem-solving skills and logical
        thinking. This not only helps me write robust backend logic but also
        contributes to my proficiency in frontend development. By continually
        honing my skills and staying updated with the latest industry trends, I
        strive to deliver top-notch solutions and provide the best possible user
        experience in my projects.
        <br />
        <br />
        <a
          className="Resume_section"
          href="/resumes.pdf"
          target="_blank"
        >
          Resume
        </a>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((services, index) => (
          <ServiceCards key={services.title} index={index} {...services} />
        ))}
      </div>
    </>
  );
};

export default SectionWrap(About, "about");
