import { BallCanvas } from "./canvas";
import { SectionWrap } from "./hoc";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <div>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}><span style={{color:'#915eff'}} >Technologies</span></p>
        <h2 className={styles.sectionHeadText}>What I &nbsp;&nbsp;<span style={{color:'#915eff'}} >Know</span></h2>
      </motion.div>
      <BallCanvas />
    </div>
  );
};

export default SectionWrap(Tech, "tech");
