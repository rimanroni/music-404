"use client"
import Allbums from "@/components/allbums/Allbums";
import Blog from "@/components/blog/Blog";
import Events from "@/components/events/Events";
import Hero from "@/components/Hero";
import Newsletter from "@/components/Newsletter";
import Player from "@/components/Palyer";
 

export default function Home() { 
  return (
  <main>
    <Hero/>
    <Player/>
    <Events/>
    <Allbums/>
    <Blog/>
    <Newsletter/>
   
  </main>
  );
}
