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
    }
}

export const Wave = () => {

}