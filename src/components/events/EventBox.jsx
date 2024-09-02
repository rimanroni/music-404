"use client" 
import Image from 'next/image'
import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from 'framer-motion';
import { feedIn } from '../../../variant';

const  EventBox = ({events})  =>  { 
   return (
    <motion.div 
     variants={feedIn('up', 0.4)}
     initial={"hidden"}
      whileInView={'show'}
      viewport={{once:false, amount:0.3}}
    className='bg-secondaray/60 rounded-[10px] p-4 lg:p-12 relative '>
       <div className='flex flex-col lg:flex-row  justify-between h-[620px] lg:h-full gap-x-4  '>
         {/*  image */}
          <div className='hidden lg:flex w-[400px]'>
                <Image src={'/assets/events/singer.png'} width={358}   
                 height={489} priority quality={100}
                alt='singerImg' className='rounded-lg' />
          </div>
         {/* event list  */} 
         <div className='flex-1 rounded-lg     h-[500px]   flex flex-col justify-between overflow-y-scroll scrollbar-thin  scrollbar-thumb-accent scrollbar-track-white/10 lg:pr-6'> 
           {events.map((event, indx)=>(
              <div key={indx} className='flex flex-col lg:flex-row items-center justify-between gap-y-4  lg:gap-y-0     lg:text-left  text-center  my-4 lg:my-0  border-b border-white/10 pb-10 lg:py-3 last-of-type:border-none  '> 
                <div className='flex flex-col items-center lg:flex-row  gap-x-4'> 
                     {/*  day  and months */}
                 <div className='flex flex-col lg:flex-row items-center  gap-x-4 '>
                 <div className='flex flex-col justify-center  items-center  leading-tight w-[80px] mb-4 lg:mb-0   '>
                    <div className='text-[44px] font-black text-accent'>{event.date.day}</div>
                    <div className='text-[20px] font-extrabold'>{event.date.month}</div>
                 </div> 
                 </div>
                 {/* location  */}
                 <div className='  w-64 flex flex-col  gap-y-2'> 
                 <div className='text-lg leading-none  font-bold '>
                    {`${event.location.city}, ${event.location.country}`}
                 </div>  
                 <div className='flex  items-center gap-x-2 justify-center lg:justify-start '>
                    <div className='text-accent text-lg'>
                    <FaMapMarkerAlt />
                     </div>
                    <div className='font-light'>{event.location.address}</div>
                 </div>
                 </div>
                </div>
                {/* price rang  */}
                <div className='w-[100px] text-[17px] text-center text-accent font-bold '>
                    {event.priceRange}
                </div>
                {/* button get ticket */}
                
                    <button className='btn btn-sm btn-accent capitalize'>get tickets</button>
               
              </div>
           ))}
         </div>
       </div>

    </motion.div>
  )
}

export default EventBox 