import React from "react";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
  AiFillPhone,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import messs from "../assets/1.jpg";
const Footer = () => {
  return (
    <footer>
      <div>
        <img src={messs} alt="Founder" />

        <h2>Subhash L</h2>
        <p>React Developer (Fresher).</p>
      </div>

      <aside>
        <h2>Contact Me</h2>

        <article>
          <a href="tel:+919148116862">
            <AiOutlinePhone />
            :+91 9148116862
          </a>
          <a href="mailto:lsubhash483@gmail.com@gmail.com">
            <AiOutlineMail />: Lsubhash483@gmail.com
          </a>
          <a href="https://www.google.com/maps/d/u/0/viewer?mid=1eLMcegTdTS9pcLcDau4JUCUQqpA&hl=en_US&ll=13.056909149854256%2C77.54023800000002&z=12">
            <CiLocationOn />: Hessaraghatta,Bangalore-560088
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
