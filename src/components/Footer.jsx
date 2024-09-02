 "use client"

import Link from "next/link";
import Nav from "./Nav"; 
import SocalLink from "./SocalLink";
import Image from "next/image";
import { motion } from "framer-motion";
import { feedIn } from "../../variant";

const Footer = () => {
  
    return (
        <footer className="  section   ">
             <div className="container mx-auto h-full  flex flex-col items-center gap-12 " >
                {/* email link */}
                <motion.div
                  variants={feedIn('up', 0.2)}
                  initial={"hidden"}
                   whileInView={'show'}
                   viewport={{once:false, amount:0.3}}
                
                >
                    <Link className="text-[24px] mb-5 lg:text-[38px] font-semibold leading-tight"  href={'mailto:rimaroni386@gmail.com'}>rimanroni386@gmail.com</Link> 
                    {/* nav */}
                    <motion.div
                      variants={feedIn('up', 0.4)}
                      initial={"hidden"}
                       whileInView={'show'}
                       viewport={{once:false, amount:0.3}}
                    >
                        <Nav containerStyle={'flex justify-center items-center gap-y-4 flex-col lg:flex-row lg:gap-x-8 text-sm uppercase font-semibold'} linkStyles={'hover:text-accent transition-all'}/>  
                    </motion.div>
                    {/* social links  */}
                    <motion.div
                      variants={feedIn('up', 0.6)}
                      initial={"hidden"}
                       whileInView={'show'}
                       viewport={{once:false, amount:0.3}}
                    >
                        <SocalLink containerStyle={'flex justify-center items-center  text-[24px] mt-4 gap-x-8'} iconStyle={'hover:text-primaryColor/80 transition-all ustify-center'}/> 
                    </motion.div>
                    {/* logo */}
                    <motion.div
                    className="mb-5"
                        variants={feedIn('up', 0.8)}
                        initial={"hidden"}
                         whileInView={'show'}
                         viewport={{once:false, amount:0.1}}
                    >
                        <Link href={'/'} className="relative w-[250px] h-[250px] transition-all   ">
                        <Image src={'/assets/header/logo.svg'} fill alt="" className="object-contain"/>
                        </Link>
                    </motion.div>
                </motion.div>
             </div>
        </footer>
    );
};

export default Footer;