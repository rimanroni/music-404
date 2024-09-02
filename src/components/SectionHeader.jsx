"use client"
import { motion } from "framer-motion";
import { feedIn } from "../../variant";

 
 
const SectionHeader = ({preTitle, title}) => {
    return (
        <header >
            <motion.h1 
             variants={feedIn('up', 0.2)}
             initial={"hidden"}
              whileInView={'show'}
              viewport={{once:false, amount:0.3}}
            
            className="font-style text-center mb-4 text-accent font-bold text-2xl">{preTitle}</motion.h1>

            <motion.h1
            variants={feedIn('up', 0.4)}
            initial={"hidden"}
             whileInView={'show'}
             viewport={{once:false, amount:0.3}}
            className="h2 text-center mb-8">{title}</motion.h1>
        </header>
    );
};

export default SectionHeader;