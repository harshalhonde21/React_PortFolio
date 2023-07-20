import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrap } from "./hoc";
import Typical from "react-typical";
import PropTypes from "prop-types";
import './css/About.css'

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
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
      >
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            "Hey folks, I harshal honde currently pursuing my btech from SB Jain Institute of Technology Management and Research, I am MERN Stack developer with speciality in Front-end development and currently Learning back-end from Express.js. And I am very habitated to work with three.js as 3D Animations.",
            100000,
          ]}
        />
        <br />
        <br />
        <a className="Resume_section"  href="https://harshalhonde.netlify.app/Resume.pdf">
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
