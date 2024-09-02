import Link from "next/link";

import {
    RiYoutubeFill,
    RiInstagramFill,
    RiSpotifyFill,
    RiSoundcloudFill,

} from 'react-icons/ri'

const socalIcons = [
     {
        path:"#", 
        icon: <RiYoutubeFill/>
     },
     {
        path:"#", 
        icon: <RiInstagramFill/>
     },
     {
        path:"#", 
        icon: <RiSpotifyFill/>
     },
     {
        path:"#", 
        icon: <RiSoundcloudFill/>
     },
]

const SocalLink = ({containerStyle, iconStyle}) => {
     
    return (
        <div className={`${containerStyle}`}>
            {socalIcons.map((item, indx)=>(
                <Link key={indx} href={item.path}>
                     <div className={`${iconStyle}`}>
                    {item.icon}
                    </div>
                     </Link>
            ))}
            
        </div>
    );
};

export default SocalLink;