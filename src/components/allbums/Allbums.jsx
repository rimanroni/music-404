 "use client"

import { motion } from "framer-motion";
import AlbumSlider from "./AlbumSlider";
import { feedIn } from "../../../variant";
import SectionHeader from "../SectionHeader";

const Allbums = () => {
 
    return (
        <section id="discography">
            <div className="container mx-auto">
                <SectionHeader preTitle={'Discography'} title={'Popular Albums'}/>
                 {/*album slider   */}
                 <motion.div
                  variants={feedIn('up', 0.4)}
                  initial={"hidden"}
                   whileInView={'show'}
                   viewport={{once:false, amount:0.3}}
                  
                 >
                    <AlbumSlider/> 
                 </motion.div>
            </div>
        </section>
    );
};

export default Allbums;