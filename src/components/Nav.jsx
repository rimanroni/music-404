 
import React, { useContext } from 'react';
import { Link } from 'react-scroll';
 import {useMediaQuery} from "react-responsive"
import { myContax } from '@/contaxt/NavContaxt';
const links = [
    {
        path:"home", 
        name:"Home"
    },
    {
        path:"tours", 
        name:"Tours"
    }, 
    {
        path:"discography", 
        name:"Discography"
    },
    {
        path:"blog", 
        name:"Blog"
    },
    {
        path:"contact", 
        name:"Contact"
    }
]
const Nav = ({containerStyle, linkStyles}) => {
   const {isOpen, setIsOpen} = useContext(myContax)
    return (
        <nav className={`${containerStyle}`} >
            {
                links.map((item, indx)=>(
                    <Link
                    onClick={()=>setIsOpen(false)}
                    smooth
                    spy
                    offset={-90}
                    activeClass='active'
                    className={`cursor-pointer ${linkStyles} border-b-2 border-transparent`}
                    key={indx} to={item.path}>{item.name}</Link>
                ))
            }
        </nav>
    );
};

export default Nav;