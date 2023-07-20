import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github} from "../assets";
import {eye} from '../assets'
import { SectionWrap } from "./hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link
}) => {
  return (
    <>
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1.0,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full "
      >
        <div className="relative w-full h-[230px] ">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute  bottom-0 right-0 flex m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
              
            </div>
            
          </div>
          <div className="absolute  bottom-0 left-0 flex m-3 card-img_hover">
            <div
              onClick={() => window.open(demo_link, "_blank")}
              className="white border border-primary w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
              style={{border:'2px solid black', borderRadius:'50%'}}
                src={eye}
                alt="github"
                className="w-2/7 h-1/9 object-contain"
              />
              
            </div>
            
          </div>
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px] ">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] ">{description}</p>
        </div>
        <div className="mt-4 flex flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              ~~{tag.name}~~
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
    </>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          <span style={{ color: "#915eff" }}>Projects</span>
        </p>
        <h2 className={styles.sectionHeadText}>
          My &nbsp;<span style={{ color: "#915eff" }}>Past Project</span>
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Hey Folks, I Harshal introducing my some past projects in Frontend as
          well as Backend and this projects gives you nice brief about me that
          how I code's. This projects contain mixtures of many languages such as
          HTML, CSS, REACTJS, EXPRESSJS and many more...
        </motion.p>
        
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrap(Works, "");
