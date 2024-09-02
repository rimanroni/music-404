
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { AudioPlayer } from 'react-audio-play';
 
 import {Swiper,SwiperSlide } from 'swiper/react'

 import {EffectCoverflow, FreeMode, Navigation , Thumbs} from 'swiper/modules';
 import "swiper/css"
 
 import "swiper/css/pagination";
 
 
const AlbumSlider =  () => {
    const [thumbsSwiper,setthumbsSwiper] = useState(null)
    const [data, setData] = useState([]);
    useEffect(()=>{
        fetch('db.json')
        .then(res=>res.json())
        .then(data => setData(data.albums))
    },[])
 
    if(!data){
        return <h1>Loading.....</h1>
    }

    return ( 
        <div>
           {/* top slider  */}
          <Swiper effect={'coverflow'}
            speed={1000}
            spaceBetween={80}
            // allowTouchMove={false}
            thumbs={{swiper:thumbsSwiper && !thumbsSwiper.destroyed? thumbsSwiper : null}}
            modules={[FreeMode , Navigation , Thumbs , EffectCoverflow  ]}
            coverflowEffect={{
                rotate:50,
                stretch:0,
                depth:100,
                modifier:1, 
                slideShadows:true

            }}
          >
            {data.map((album, indx)=>(
                <SwiperSlide key={indx} className='mb-12 '>
                     <div className='w-full bg-secondaray/80 rounded-[10px] flex flex-col lg:flex-row p-6 lg:p-12 gap-x-12 items-center'>
                     {/* image */}
                     <div className='relative hidden lg:flex w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] cursor-pointer rounded-[10px]  overflow-hidden'>
                        <Image src={album.img} 
                        fill alt=''
                         quality={100}
                         className='object-contain'
                          priority/>
                     </div>
                     {/* tracks container */}
                     <div className='flex flex-1  '>
                        {/* tracks */}
                        <div className='flex flex-1  flex-col lg:px-12'>
                            {album.tracks?.map((track, indx)=>(
                                <div key={indx} className='w-full h-[500px] flex flex-1 justify-between items-center '>
                                    {/* trackings */}
                                   <div className='flex items-center capitalize gap-x-2 font-semibold lg:font-extrabold'>
                                    <div className='text-accent text-sm lg:text-lg'>0{indx + 1}.</div>
                                    <div className='text-sm lg:text-base'>{track.name}</div>
                                   </div>
                                   {/* player  */}
                                   <div className='lg:pr-6'>
                                    <AudioPlayer className='album-player' src={track.src} loop preload='none' color='#fff' volume={40}  volumePlacement='bottom' style={{
                                        background:" transparent", 
                                        boxShadow:"none", 
                                        width:"100%"
                                    }} />
                                   </div>
                                </div>
                            ))}
                        </div>
                     </div>
                      </div>
                </SwiperSlide>
            ))}
          </Swiper>
           {/* thums slider  */}
          <Swiper 
           onSwiper={setthumbsSwiper}
           modules={[FreeMode, Navigation, Thumbs]}
           breakpoints={{
            320:{
                slidesPerView:2,
                spaceBetween:10
            },
            425:{
                slidesPerView:2,
                spaceBetween:30
            }, 
            768:{
                slidesPerView:3,
                spaceBetween:30
            }, 
            1024:{
                slidesPerView:4,
                spaceBetween:30
            }, 
            1310:{
                slidesPerView:5,
                spaceBetween:30 
            }
           }}
           spaceBetween={20}
           slidesPerView={5}
           freeMode={true}
           watchSlidesProgress={true}
           className='thums-slider'
           > 
             {data?.map((item, indx)=>(
                <SwiperSlide key={indx} className='relative group overflow-hidden border-b-2 border-transparent w-[254px] rounded-[10px]'>
                    {/* image */}
                  <div className='relative w-[195px] h-[195px] sm:w-[360px] sm:h-[360px] md:w-[240px] md:h-[240px] cursor-pointer'>
                    <Image src={item.img} fill alt='' className='object-contain group-hover:scale-105 duration-300 '/>
                  </div>
                </SwiperSlide>
             ))}
            
             </Swiper>


        </div>
    );
};

export default AlbumSlider;