import { myContax } from "@/contaxt/NavContaxt";
import { useContext } from "react";

 

const MenuBtn = () => {
  const {isOpen, setIsOpen} = useContext(myContax);

    return (
       <div onClick={()=>setIsOpen(!isOpen)} className="group flex  flex-col items-end gap-y-2 cursor-pointer lg:hidden">
         <div className="w-7 h-[2px] bg-white transition-all duration-300"></div>
         <div className="w-4 group-hover:w-7 h-[2px] bg-white"></div>
         <div className="w-7 h-[2px] bg-white"></div>
       </div>
    );
};

export default MenuBtn;