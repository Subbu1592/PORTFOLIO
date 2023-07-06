import React from "react";
import { motion } from "framer-motion";
import {
  AiFillIeCircle,
  AiFillAndroid,
  AiFillWindows,
  AiFillHtml5,
} from "react-icons/ai";
import { BiLogoReact, BiLogoCss3, BiLogoTailwindCss } from "react-icons/bi";
import { SiMui } from "react-icons/si";
import { BsFiletypeScss } from "react-icons/bs";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },

    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Services & Skills</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}>
          <br />
          <h5>
            Fresher(Learning Everything by myself by refering youtube and
            google)
          </h5>
          <br />
          <p>With 3 Months of Learning</p>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}>
          <AiFillIeCircle />
          <span>web app Development</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}>
          <BiLogoReact />
          <span>React UI Library</span>
        </motion.div>
        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}>
          <div className="images" style={{ display: "flex", fontSize: "25px" }}>
            {" "}
            <BiLogoCss3 />
            <AiFillHtml5 />
            <BiLogoTailwindCss />
            <SiMui />
            <BsFiletypeScss />
          </div>
          <span>Desktop Development</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
