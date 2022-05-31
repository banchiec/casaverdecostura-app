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
 console.log(products)
  return (
    <>  
      <section> 
      <h2 className='title'>{products[0]?.collections[0]}</h2> 
        <div className="collections-container"> 
          <div className="collections-content">
            <div className="collections-content-image">     
              <img className="collection-image" src={allphotos[2]?.url}></img>
            </div>
            <div className="collections-content-text">
              <h3>
                Deslumbra a tus <br /> invitados
              </h3>
              <p>
                Trabajamos a medida. Tú puedes elegir el vestido que más se
                adapte a tu personalidad. Desde nuestros modelos puedes elegir
                la forma, los tejidos, los colores, los complementos y modificar
                el modelo para sentirte más espectacular y segura en la boda de
                tu hijo o hija. Nuestro equipo te ayudará a elegir el modelo de
                tus sueños.
              </p>
            </div>
          </div>
        </div>
      </section>
      <GalleryCollection photos={allphotos} />
    </>
  );
}
 