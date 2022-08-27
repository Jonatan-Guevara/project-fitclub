import React from "react";
import Header from "../Header/Header";
import "./Hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import heart from "../../assets/heart.png";
import calories from "../../assets/calories.png";
import NumberCounter from 'number-counter'
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth<=768 ? true: false;

  return (
    <div className="hero" id='home'>
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        {/**The best ad */}
        <div className="the-best-ad">
          <motion.div 
          initial={{ left: mobile? "165px": '238px' }}
          whileInView={{ left: '8px' }}
          transition={{...transition, type: 'rween'}}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/**Hero Heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              in herewe will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>
        {/**Figure */}
        <div className="figures">
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='4' preFix='+' />
            </span>
            <span>expert coachs</span>
          </div>
          <div>
            <span>
              <NumberCounter end={978} start={800} delay='4' preFix='+' />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay='4' preFix='+' />
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        {/**Hero Buttons */}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Lear More</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div 
        className="heart-rate"
        transition={transition}
        initial={{ right: "-1rem" }}
        whileInView={{ right: '4rem' }}

        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpm </span>
        </motion.div>
        {/**Hero Images */}
        <motion.img
        transition={transition}
        initial={{ right: "11rem" }}
        whileInView={{ right: '20rem' }} 
        src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />
        {/**Calories */}
        <motion.div className="calories"
        transition={transition}
        initial={{ right: "37rem" }}
        whileInView={{ right: '28rem' }}>
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
