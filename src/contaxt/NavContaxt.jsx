"use client"

import { createContext, useState } from "react";

export const myContax  = createContext(null)
const NavContaxt = ({children}) => {
    const [isOpen , setIsOpen] = useState(false)
    return (
        <myContax.Provider value={{isOpen, setIsOpen}}>
            {children}
        </myContax.Provider>
    );
};

export default NavContaxt;