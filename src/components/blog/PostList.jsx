import React, { useState } from 'react';
import Link from 'next/link';
import {BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { feedIn } from '../../../variant';

const PostList = ({post}) => {
    const [showAll , setShowAll] = useState(false) 
    const firstThreePost = showAll ? post : post.slice(0, 3);
     return (
       <motion.div
       variants={feedIn('up', 0.5)}
       initial={"hidden"}
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
       > 
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3    mt-4 justify-between gap-12 py-10  lg:pt-16 lg:pb-24  border-t border-white/10'>
             {firstThreePost.map((post , indx)=>(
                 <div className='flex-1'  key={indx}>
                   {/* date  */}
                   <div className='text-accent font-bold mb-1 '>{post.date}</div>
                   {/* title */}
                   <div className='text-xl font-medium mb-4'>{post.title}</div>
                   {/* description */}
                   <div className='text-white/30 mb-6 font-light'>{post.description}</div>
                   <Link href={'#' } className='flex items-center gap-x-2 group'>
                    Read More 
                    <BsArrowRight className='text-xl group-hover:ml-1 transition-all duration-300'/>
                   </Link>
                </div>
             ))}
        </div>
        {/* view all post */}
        <div className='flex justify-center items-center '>
        <button className='btn btn-lg btn-accent' onClick={()=>setShowAll(!showAll)}>{showAll?'Show Less': "View All Post "} </button>
        </div>
       </motion.div>
    );
};

export default PostList;