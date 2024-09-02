 "use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { MouseParallaxContainer, MouseParallaxChild  } from "react-parallax-mouse"
import { TypeAnimation } from "react-type-animation"
import { feedIn } from "../../variant"
import moment from "moment"

const locationSqunce = [
   "Los Angeles, USA", 
   3000, 
   "Rio de Janeiro, Brazil", 
   2000, 
   "Tokyo, Japan", 
   4000, 
   "Paris, France", 
   1500, 
   "Sydney, Australia", 
   
]
 const  Hero = ()=> {
  
  return (
    <section className="h-[80vh] mb-5  lg:h-[850px]" id="home">
      <div className="container mx-auto   h-full flex justify-center items-center lg:justify-start">
        {/* text  */}
        <div className="  h-full flex  flex-col justify-center items-center
         lg:items-start z-20 pt-12">
          <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.2} resetOnLeave className="relative flex items-center h-[120px] lg:h-max lg:w-[840px] ">
            {/* mouse child one */}
            <MouseParallaxChild factorX={0.2} factorY={0.4} className="relative ">
                <motion.div
                 variants={feedIn('up', 0.4)}
                 initial={"hidden"}
                  whileInView={'show'}
                  viewport={{once:false, amount:0.3}}
                
                className="w-[300px] h-[101.37px] lg:w-[725px] lg:h-[224.97px]">
                  <Image src={'/assets/hero/typo-1.svg'}
                    fill
                   alt=""
                   className="object-contain"
                  />
                </motion.div>
            </MouseParallaxChild>
            {/* mouse child two */}
            <MouseParallaxChild factorX={0.9} factorY={0.9} className="absolute lg:left-6  z-30">
                <motion.div
                 variants={feedIn('up', 0.7)}
                 initial={"hidden"}
                  whileInView={'show'}
                  viewport={{once:false, amount:0.3}}
                
                className="w-[300px] h-[101.37px] lg:w-[625px] lg:h-[224.97px]">
                  <Image src={'/assets/hero/typo-2.svg'}
                    fill
                   alt=""
                   className="object-contain"
                  />
                </motion.div>
            </MouseParallaxChild>
            {/* mouse child three */}
        
            <MouseParallaxChild factorX={0.3} factorY={0.6} className="hidden lg:flex  absolute right-0  z-20 opacity-80 ">
                <motion.div
                 variants={feedIn('left', 1.4)}
                 initial={"hidden"}
                  whileInView={'show'}
                  viewport={{once:false, amount:0.3}}
                
                className="w-[150px] h-[100px] lg:w-[248px] lg:h-[200px] mix-blend-luminosity">
                  <Image src={'/assets/hero/bird.png'}
                    fill
                   alt=""
                   className="object-contain"
                  />
                </motion.div>
            </MouseParallaxChild>
  
           </MouseParallaxContainer>
           <motion.div
            variants={feedIn('up', 1)}
            initial={"hidden"}
             whileInView={'show'}
             viewport={{once:false, amount:0.7}}
           className="min-h-[60px] text-[26px] flex items-center mx-8 mb-6">
            <div className="hidden lg:flex items-center lg:gap-x-0 ">
              <div>World </div>
              <div className="relative hidden lg:flex items-center justify-center h-2 w-2 mx-2">
                <Image fill src={'/assets/hero/dot.svg'} alt=""/>
              </div>
              <div>
                Tour
              </div>
              <div className="relative hidden lg:flex items-center justify-center h-2 w-2 mx-2">
                <Image fill src={'/assets/hero/dot.svg'} alt=""/>
              </div>
              <div>
                {moment().format("YYYY")}
              </div>
            </div>
            {/* icons */}
            <div className="hidden lg:flex items-center justify-center relative w-7 h-7 mx-4">
              <Image fill   src={' /assets/hero/mic.svg'} alt=""/>
            </div>
            {/* animation  */}
            <TypeAnimation sequence={locationSqunce} wrapper="div" speed={10} deletionSpeed={10} repeat={Infinity} cursor={false}>

            </TypeAnimation>
           </motion.div>
           {/* btn */}
           <motion.div
           variants={feedIn('left', 1)}
           initial={"hidden"}
            whileInView={'show'}
            viewport={{once:false, amount:0.8}}
           
           className="px-8">
            <button className="btn btn-lg btn-accent capitalize">get tickets</button>
           </motion.div>
          
        </div>
        {/* image */}
        <motion.div
         variants={feedIn('left', 0.2)}
         initial={"hidden"}
          whileInView={'show'}
          viewport={{once:false, amount:0.4}}
        
        className="hidden lg:flex absolute right-0 top-0 before:w-[784px] before:h-[893px] before:absolute before:right-0 before:top-0 before:bg-singerOverlay before:z-10">
          <Image src={'/assets/hero/singer.png'}
           width={617}
           height={593}
           alt=""
           quality={100}
           priority 
           />
        </motion.div>

      </div>
    </section>
  )
}

export default Hero