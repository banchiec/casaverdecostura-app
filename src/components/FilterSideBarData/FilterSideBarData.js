import React, { useState } from "react"; 
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as Iocons from "react-icons/io"
import * as RiIcons from "react-icons/ri"     



export const FilterSideBarData = [   
    {
        title: "Vestidos Fiesta", 
        path: "#", 
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>, 
        iconOpened: <RiIcons.RiArrowUpSFill/>, 
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
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>, 
        iconOpened: <RiIcons.RiArrowUpSFill/>, 
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
        icon: <AiIcons.AiFillHome/>,
        iconClosed: <RiIcons.RiArrowDownSFill/>, 
        iconOpened: <RiIcons.RiArrowUpSFill/>, 
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
