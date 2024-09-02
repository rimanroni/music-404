'use client '

import { motion } from "framer-motion"
import Image from "next/image"
import { AudioPlayer } from "react-audio-play"
import { feedIn } from "../../variant"

const  Player = () => {
   
  return (
    <>
    <motion.div
    
    variants={feedIn('up', 1)}
    initial={"hidden"}
     whileInView={'show'}
     viewport={{once:false, amount:0.8}}
    
    className="bg-gradient-to-r px-16 from-tertiary/70 to-primaryColor/10 backdrop-blur-[15px] h-[112px] flex justify-center items-center relative  z-40 ">
      <div className="container mx-auto flex flex-col justify-between items-center lg:flex-row lg:justify-between ">
        <div className="hidden   lg:flex items-center  gap-x-4 w-[300px]">
        {/*  avatar img */}
          <div className="relative w-16 h-16">
          <Image src={'/assets/player/avatar.png'} alt="" fill priority />
           </div>
           {/* text  */}
            <div className="leading-none">
              <div className="text-lg font-medium">Freddie Mercury</div>
              <div className="text-sm font-light">Freedom</div>
            </div>
           </div>
        {/* audio player */}
        <div className="w-full   lg:w-[500px]     ">
          <AudioPlayer loop
           preload="none"
           color="#fff"
            volume={40}
             volumePlacement="top"
             src="/assets/freedom.mp3"
             style={{
              background:"transparent", 
              boxShadow:"none", 
              width:"100%"
             }}
             />
        </div>
      </div>
    </motion.div>
    
    </>
  )
}

export default Player