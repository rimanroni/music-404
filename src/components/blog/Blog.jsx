import React, { useEffect, useState } from 'react';
import SectionHeader from '../SectionHeader';
import PostList from './PostList';

const Blog = () => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('db.json')
        .then(res=>res.json())
        .then(data=>setData(data.posts))
    },[])
  
    return (
        <section className='section' id='blog'>
            <div className="container mx-auto">
                <SectionHeader preTitle={"Our Blog"} title={'Latest News'}/>
                <PostList post={data}/>
            </div>
        </section>
    );
};

export default Blog;