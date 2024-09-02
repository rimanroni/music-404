import React from 'react';
import SectionHeader from './SectionHeader';
import { motion } from 'framer-motion';
import { feedIn } from '../../variant';

const Newsletter = () => {

    return (
        <section className='bg-newleates bg-fixed h-[480px] bg-cover w-full bg-center bg-no-repeat' id='contact' >
        <div className="container py-8 mx-auto h-full">
            <div className='flex flex-col justify-center items-center h-full'>
                {/* text */}
                <SectionHeader preTitle={'Get In Touch'} title={'Sign up to our newsletter'}/>
                {/* input */}
                <motion.div
                  variants={feedIn('up', 0.4)}
                  initial={"hidden"}
                   whileInView={'show'}
                   viewport={{once:false, amount:0.3}}
                className='relative flex items-center w-full max-w-xl '>
                    <input type="text"  className='w-full h-[64px] outline-none rounded-full  bg-primaryColor/60 backdrop-blur-[15px] px-8 ' placeholder='Email address'/>
                    <button className='bg-accent absolute right-2 h-[46px] rounded-full text-[15px] hover:bg-accent-hover transition-all px-6'>Subcribe </button>
                </motion.div>
            </div>
        </div>
        </section>
    );
};

export default Newsletter;