 "use client"

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { feedIn } from "../../variant";
import Navmobile from "./Navmobile";
import Nav from "./Nav";
import MenuBtn from "./MenuBtn";
import SocalLink from "./SocalLink";
 

const Header = () => {
   const [active, setActive ] = useState(false);
   useEffect(()=>{
        const handleScroll = () =>{
            // detect scroll 
            setActive(window.scrollY > 100)
        } 
        // event lisinar 
        window.addEventListener("scroll", handleScroll)

        // clear event lisenar
        return () =>{
            window.removeEventListener('scroll' , handleScroll)
        }

   },[])
    return (
        <header className={`${active ? 'bg-[#030315] py-6 ' : 'bg-transparent py-8'} fixed   z-50 w-full  transition-all`}>
           <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between ">
            {/* logo */}
            <Link href={'/'} className="relative flex w-[225px] h-[37.64px] transition-all mb-4 lg:mb-0 ">
              <Image src={' /assets/header/logo.svg'} className="object-contain" fill alt="" />
           </Link>
           {/* nav */}
           <Nav containerStyle={'hidden lg:flex items-center gap-x-8'}/>
           {/* nav mobile */}
           <Navmobile/>
           {/* menu button */}
           <div className="absolute right-7  z-10 top-9 lg:hidden ">
            <MenuBtn/>
           </div>
           {/* social links  */}
           <div>
            <SocalLink containerStyle={'flex  gap-x-4'} iconStyle={'text-2xl hover:text-accent transition-all cursor-pointer duration-200'}/>
           </div>
           </div>
        </header>
    );
};

export default Header;