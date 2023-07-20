import Lottie from "lottie-react";
import animationData from "../../assets/animation_lk74zc4z.json";
import './Computers.css'

const ComputersCanvas = () => {
  return <div className="my_animation">
    <Lottie animationData={animationData} />
  </div>;
};

export default ComputersCanvas;
