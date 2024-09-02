"use client"
import { useEffect, useState } from "react";
import SectionHeader from "../SectionHeader";
import EventBox from "./EventBox";
 

const  Events =  ()=>{
    const[ events  , setEvents] = useState([]);
    useEffect(()=>{
      fetch('db.json')
      .then(res=>res.json())
      .then(data=>setEvents(data.events))
    },[])
  return (
    <section className="section" id="tours">
        <div className="container mx-auto">
            {/* section header */}
            <SectionHeader preTitle={'World Tour'} title={'Upcoming Events'}/>
            {/* event box  */}
            <EventBox events={events}/>
        </div>
    </section>
  )
}

export default Events