import React from "react"; 
// import * as FaIcons from "react-icons/fa"
// import * as AiIcons from "react-icons/ai"
import * as Iocons from "react-icons/io"
// import * as RiIcons from "react-icons/ri"     
import { GiLargeDress} from "react-icons/gi"; 
import "./FilterSideBarData.css"


export const FilterSideBarData = [   
    {
        title: "Vestidos Fiesta", 
        path: "#", 
        icon: <GiLargeDress/>,
        // icon: <img className="icon-img" src="https://res.cloudinary.com/aleksmotin/image/upload/v1648645924/dress_auzhrf.png"/>,
        subNav: [
            {
                title: "Blusas",  
                path: "#", 
                icon: <Iocons.IoIosPaper/>
            },
            {
                title: "Abrigos",  
                path: "#", 
                icon: <Iocons.IoIosPaper/>
            }, 
            {
                title: "Pantalones",  
                path: "#", 
                icon: <Iocons.IoIosPaper/>
            }, 
            {
                title: "Monos",  
                path: "#", 
                icon: <Iocons.IoIosPaper/>
            },  
            {
                title: "Torrearas",  
                path: "#", 
                icon: <Iocons.IoIosPaper/>
            },  
            {
                title: "Kimono",  
                path: "#", 
                icon: <Iocons.IoIosPaper/>
            },   
            {
                title: "Chaqueta",  
                path: "#", 
                icon: <Iocons.IoIosPaper/>
            },   
        ]
    },  
    {
        title: "Complementos", 
        path: "#", 
        icon: <img className="icon-img" src="https://res.cloudinary.com/aleksmotin/image/upload/v1648646187/mask_d40vfv.png"/>,
        subNav: [
            {
                title: "Bolsos",  
                path: "#", 
                icon: <Iocons.IoIosPaper/>
            },
            {
                title: "Mascarillas",  
                path: "#", 
                icon: <Iocons.IoIosPaper/>
            }, 
            {
                title: "Joyeria",  
                path: "#", 
                icon: <Iocons.IoIosPaper/>
            }, 

            {
                title: "Tocados",  
                path: "#", 
                icon: <Iocons.IoIosPaper/>
            }, 


        ]
    }, 
    {
        title: "Temporada", 
        path: "#", 
        icon: <img className="icon-img" src="https://res.cloudinary.com/aleksmotin/image/upload/v1648646494/temporalropa_gby4ml.png"/>,
        subNav: [
            {
                title: "Blusas",  
                path: "#", 
                icon: <Iocons.IoIosPaper/>
            },
            {
                title: "Abrigos",  
                path: "#", 
                icon: <Iocons.IoIosPaper/>
            }, 
            {
                title: "Pantalones",  
                path: "#", 
                icon: <Iocons.IoIosPaper/>
            }, 

            {
                title: "Monos",  
                path: "#", 
                icon: <Iocons.IoIosPaper/>
            },  
            {
                title: "Torrearas",  
                path: "#", 
                icon: <Iocons.IoIosPaper/>
            },  
            {
                title: "Kimono",  
                path: "#", 
                icon: <Iocons.IoIosPaper/>
            }, 




        ]
    }
]
