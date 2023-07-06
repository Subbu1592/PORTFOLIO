import React, { useState } from "react";
import vg from "../assets/vg.png";
// import toast from "react-hot-toast";
import { motion } from "framer-motion";
// import { addDoc, collection } from "firebase/firestore";
// // import { db } from "../firebase";
import { Link } from "react-router-dom";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

const Contact = () => {
  const animations = {
    form: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },

    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
      transition: {
        delay: 0.5,
      },
    },
  };
  return (
    <div id="contact">
      <section>
        <motion.form>
          <h2>Know Me</h2>
          <div className="container">
            <div className="card">
              <div className="photo"></div>
              <div className="banner"></div>
              <ul>
                <li>
                  <b>Subhash L</b>
                </li>
                <li>React Developer</li>
              </ul>
              <button className="contacts">click to get in touch</button>
              <div className="social-media-banner">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/subhash-l-964059282/">
                  <AiFillLinkedin />
                </a>
                <a href="https://github.com/Subbu1592" target="_blank">
                  {" "}
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>
        </motion.form>
      </section>
      <aside>
        <img src={vg} alt="Graphics" />
      </aside>
    </div>
  );
};

export default Contact;
