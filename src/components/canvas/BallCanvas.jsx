import { technologies } from "../../constants";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import "./BallCanvas.css";
import { textVariant } from "../../utils/motion";

const About = ({ icon, name }) => {
  return (
    <div className="separte_box">
      <img src={icon} alt={name}></img>
      <p>{name}</p>
    </div>
  );
};

About.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const BallCanvas = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <div className="my_tech">
          {technologies.map((services) => (
            <About key={services.name} {...services} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default BallCanvas;
