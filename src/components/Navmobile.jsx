import { myContax } from "@/contaxt/NavContaxt";
import { useContext } from "react";
import {RiCloseLine} from 'react-icons/ri'
import Nav from "./Nav";
 
const Navmobile = () => {
    const {isOpen, setIsOpen} = useContext(myContax)
    return (
        <nav className={` ${isOpen?'right-0' : "-right-full"} 
        lg:hidden bg-primaryColor  w-full top-0 fixed z-20 bottom-0 transition-all  duration-500  `}>
           <div onClick={()=>setIsOpen(!isOpen)} className=" absolute right-4 top-5 cursor-pointer  ">
             <RiCloseLine className="text-5xl "/>
           </div>
           <Nav containerStyle={'flex flex-col text-[20px] uppercase font-bold h-full justify-center items-center gap-y-8 ' }/>
        </nav>
    );
};

export default Navmobile;