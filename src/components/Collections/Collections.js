import React, { useEffect, useState } from 'react' 
import "./Collections.css" 
import ProductsService from '../../services/products.service'    
import { GalleryCollection } from '../GalleryCollection/GalleryCollection'
export const Collections = ({products}) => {     
 // console.log(props.product[0]?.photos?.map(item => item.url))    
 const  allphotos = []; 
 for(let i = 0;  i  < products.length ; i++) {
    console.log(i)  
    const  productsPhotos = products[i]?.photos;   
    allphotos.push(...productsPhotos);
 }       
 console.log(allphotos)  
  return ( 
    <>     
    <section>  
        <h2>{products[0]?.collections[0]}</h2> 
        <hr className='line' ></hr> 
      <article>
        <div className='collections-container'> 
        <img  src={allphotos[0]?.url}/>   
        <div className='collections-content'> 
        <h3>Deslumbra a tus <br/> invitados</h3>
        <p>Trabajamos a medida. Tú puedes elegir el vestido que más se adapte a tu personalidad. Desde nuestros modelos puedes elegir la forma, los tejidos, los colores, los complementos  y modificar el modelo para sentirte más espectacular y segura en la boda de tu hijo o hija. Nuestro equipo te ayudará a elegir el modelo de tus sueños.</p>
        </div>
        </div>
      </article>
    </section> 
      <GalleryCollection photos={allphotos}   />   
    </>
   
  )
}
