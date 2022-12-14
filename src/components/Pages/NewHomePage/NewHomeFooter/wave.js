import React from "react";
import "./wave.css";
import { motion } from "framer-motion";

const wave1 = {
  hidden: {
    backgroundPositionX: "0px",
    opacity: 0.0,
  },
  visible: {
    backgroundPositionX: "1000px",
    zIndex: 1000,
    opacity: 0.6,
    transition: {
      loop: Infinity,
      ease: "linear",
      duration: 25,
    },
  },
};

const wave2 = {
  hidden: {
    backgroundPositionX: "0px",
    opacity: 0.5,
  },
  visible: {
    backgroundPositionX: "-1000px",
    zIndex: 999,
    opacity: 0.5,
    transition: {
      loop: Infinity,
      ease: "linear",
      duration: 15,
    },
  },
};

const wave3 = {
  hidden: {
    backgroundPositionX: "0px",
    opacity: 0.3,
  },
  visible: {
    backgroundPositionX: "1000px",
    zIndex: 998,
    opacity: 0.3,
    transition: {
      loop: Infinity,
      ease: "linear",
      duration: 10,
    },
  },
};

const wave4 = {
  hidden: {
    backgroundPositionX: "0px",
    opacity: 0.1,
  },
  visible: {
    backgroundPositionX: "1000px",
    zIndex: 997,
    opacity: 0.1,
    transition: {
      loop: Infinity,
      ease: "linear",
      duration: 5,
    },
  },
};

export const WaveEffects = () => {
  return (
    <>
      <div className="footercontainert">
        {/* <h2 className="waveContext">Let's have fun</h2> */}
        <div className="footert">
          <motion.div
            variants={wave1}
            initial="hidden"
            animate="visible"
          ></motion.div>
          <motion.div
            variants={wave2}
            initial="hidden"
            animate="visible"
          ></motion.div>

          {/* <motion.div
            variants={wave3}
            initial="hidden"
            animate="visible"
          ></motion.div>

          <motion.div
            variants={wave4}
            initial="hidden"
            animate="visible"
          ></motion.div> */}
        </div>
      </div>
    </>
  );
};
