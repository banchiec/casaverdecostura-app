import { useState } from "react"
// import HamburguerButton from "../../../../components/CustomButtons/HamburguerButton/HamburguerButton"
import {ContainerSidebarShop} from './sidebarShopStyled.js'
import './sidebarShop.css'

// import { ContainerSidebar, ContainerIcon } from "./sidebarStyled";
// import {RiAdminFill} from 'react-icons/ri'
// import { GiLargeDress } from 'react-icons/gi'

const SidebarShop = () => {
	const [showSidebarshop, setShowSidebarshop] = useState(false)
	const [show, setShow] = useState('')

	const toogleShowSidebashop = () => {
		setShowSidebarshop(!showSidebarshop)
		showSidebarshop ? setShow('show'): setShow(' ')
		// setShow('show')
	}
	console.log(showSidebarshop);
	return(
		<ContainerSidebarShop>
				<h4 className="title_sidebar_shop" onClick={()=>toogleShowSidebashop()}>FILTROS</h4>
				{/* <HamburguerButton/> */}
				<div className={show}>
					<ul>
						<li>1</li>
						<li>2</li>
						<li>3</li>
					</ul>
				</div>
	  </ContainerSidebarShop>
// 		<ContainerSidebar>
// 			<nav className="md:left-1 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
//         <div
//             className="sidebar_logo"
//         >
//           <div
//           >
//             <div className="">
//               <div className="flex flex-wrap">
//                 <ContainerIcon>
//                   <Link
//                     to="/"
//                   >
//                    <RiAdminFill/> 
//                   </Link>
//                   <div>
//                     <h3>
//                       Panel de Administración 
//                     </h3>
//                   </div>

//                 </ContainerIcon>
//               </div>
//             </div>
            
//             <ul className="md:flex-col md:min-w-full flex flex-col list-none">
//               <li className="items-center">
//                 <Link
//                   className={
//                     "text-xs uppercase py-3 font-bold block " +
//                     (window.location.href.indexOf("/admin/dashboard") !== -1
//                       ? "active"
//                       : "text-blueGray-700 hover:text-blueGray-500")
//                   }
//                   to="/admin"
//                 >
//                   <>
//                   <GiLargeDress/>
//                     Registrar producto 
//                   </>
//                 </Link>
//               </li>
//             </ul>

//             {/* Divider */}
//             {/* <hr className="my-4 md:min-w-full" /> */}
//             {/* Heading */}
//             {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
//               Auth Layout Pages
//             </h6> */}
//             {/* Navigation */}

//             <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
//               {/* <li className="items-center">
//                 <Link
//                   className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
//                   to="/auth/login"
//                 >
//                   <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{" "}
//                   Login
//                 </Link>
//               </li> */}

//               {/* <li className="items-center">
//                 <Link
//                   className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
//                   to="/auth/register"
//                 >
//                   <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>{" "}
//                   Register
//                 </Link>
//               </li> */}
//             </ul>

//             {/* Divider */}
//             {/* <hr className="my-4 md:min-w-full" /> */}
//             {/* Heading */}
//             {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
//               No Layout Pages
//             </h6> */}
//             {/* Navigation */}

//             <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
//               {/* <li className="items-center">
//                 <Link
//                   className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
//                   to="/landing"
//                 >
//                   <i className="fas fa-newspaper text-blueGray-400 mr-2 text-sm"></i>{" "}
//                   Landing Page
//                 </Link>
//               </li> */}

//               {/* <li className="items-center">
//                 <Link
//                   className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
//                   to="/profile"
//                 >
//                   <i className="fas fa-user-circle text-blueGray-400 mr-2 text-sm"></i>{" "}
//                   Profile Page
//                 </Link>
//               </li> */}
//             </ul>

//             {/* Divider */}
//             {/* <hr className="my-4 md:min-w-full" /> */}
//             {/* Heading */}
//             {/* <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
//               Documentation
//             </h6> */}
//             {/* Navigation */}
//             <ul>
//               {/* <li className="inline-flex">
//                 <a
//                   href="https://www.creative-tim.com/learning-lab/tailwind/react/colors/notus"
//                   target="_blank"
//                   className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
//                 >
//                   <i className="fas fa-paint-brush mr-2 text-blueGray-300 text-base"></i>
//                   Styles
//                 </a>
//               </li>

//               <li className="inline-flex">
//                 <a
//                   href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus"
//                   target="_blank"
//                   className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
//                 >
//                   <i className="fab fa-css3-alt mr-2 text-blueGray-300 text-base"></i>
//                   CSS Components
//                 </a>
//               </li> */}

//               {/* <li className="inline-flex">
//                 <a
//                   href="https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus"
//                   target="_blank"
//                   className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
//                 >
//                   <i className="fab fa-angular mr-2 text-blueGray-300 text-base"></i>
//                   Angular
//                 </a>
//               </li>
//  */}
//               {/* <li className="inline-flex">
//                 <a
//                   href="https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus"
//                   target="_blank"
//                   className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
//                 >
//                   <i className="fab fa-js-square mr-2 text-blueGray-300 text-base"></i>
//                   Javascript
//                 </a>
//               </li> */}

//               {/* <li className="inline-flex">
//                 <a
//                   href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus"
//                   target="_blank"
//                   className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
//                 >
//                   <i className="fab fa-react mr-2 text-blueGray-300 text-base"></i>
//                   NextJS
//                 </a>
//               </li> */}

//               {/* <li className="inline-flex">
//                 <a
//                   href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus"
//                   target="_blank"
//                   className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
//                 >
//                   <i className="fab fa-react mr-2 text-blueGray-300 text-base"></i>
//                   React
//                 </a>
//               </li> */}

//               {/* <li className="inline-flex">
//                 <a
//                   href="https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus"
//                   target="_blank"
//                   className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
//                 >
//                   <i className="fas fa-link mr-2 text-blueGray-300 text-base"></i>
//                   Svelte
//                 </a>
//               </li> */}

//               {/* <li className="inline-flex">
//                 <a
//                   href="https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus"
//                   target="_blank"
//                   className="text-blueGray-700 hover:text-blueGray-500 text-sm block mb-4 no-underline font-semibold"
//                 >
//                   <i className="fab fa-vuejs mr-2 text-blueGray-300 text-base"></i>
//                   VueJS
//                 </a>
//               </li> */}
//             </ul>
//           </div>
//         </div>
//       </nav>
// 		</ContainerSidebar>
	)
}
export default SidebarShop