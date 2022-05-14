import React, { useContext, useEffect, useState } from 'react'
import "./Details.css";    
import { Gallery } from '../../components/Gallery/Gallery';  
import { Colors } from '../../components/Colors/Colors';  
import { cartContext } from '../../components/context/CartContext'; 
export const DetailsItem = (props) => {              
 
  
    let images = props.photos?.map(item => item.url);
    const [imageShow, setImageShow] = useState(images[0]);    
    const [sizes, setSizes] = useState(props.size[0]);                         
    let imageUrl = imageShow;    
    const {name, price, _id, description, } = props.productDetails; 
    const product = {name,imageUrl,_id,description,price, sizes};  
    const [showSidebarshop, setShowSidebarshop] = useState(true);
    const [show, setShow] = useState("");     
    const { addItemtoCart} = useContext(cartContext);  
    const toogleShowSidebashop = () => {
        setShowSidebarshop(!showSidebarshop);
        console.log(showSidebarshop);
        showSidebarshop ? setShow("show") : setShow("");
      };    
    const onShow = (e) => {
        setImageShow(e.target.name);
      };   

    const handleSize = (e) => {
      if(e.target.name === "sizes") {
        setSizes(e.target.value)
      }
    }
  
  return (
    <>
      <div className="product-warnings">
              <h3 className="product_warnings_title"> CUIDADOS</h3>
              <ul>
               <li><img className='warning-icon' src="https://res.cloudinary.com/aleksmotin/image/upload/v1651337873/image-removebg-preview_jtf9uy.png" ></img> No lavar </li>
                <li><img className='warning-icon' src="https://res.cloudinary.com/aleksmotin/image/upload/v1651337873/image-removebg-preview_jtf9uy.png" ></img> No usar lejilla</li>
                <li><img className='warning-icon' src="https://res.cloudinary.com/aleksmotin/image/upload/v1651337873/image-removebg-preview_jtf9uy.png" ></img>Planchar maximo 110</li>
                <li><img className='warning-icon' src="https://res.cloudinary.com/aleksmotin/image/upload/v1651337873/image-removebg-preview_jtf9uy.png" ></img>Lim.Seco tetracloroetileno</li>
                <li><img className='warning-icon' src="https://res.cloudinary.com/aleksmotin/image/upload/v1651337873/image-removebg-preview_jtf9uy.png" ></img>No usar secadora</li>
              </ul>
            </div>
            <Gallery activeImage={imageShow} setImageShow={setImageShow} photos={props.productDetails?.photos}></Gallery>
            <div className="product-info">
              <p className="product-name">{props.productDetails?.name}</p>
              <p className="product-description">
                {props.productDetails?.description}
              </p>
              <span className="product-price">{props.productDetails?.price} EUR</span>
              <br />
              <select name="sizes"  onChange={(e)=>handleSize(e)} className="select-size">
                {props.productDetails?.size.map((item, i) => {
                  return (
                    <>
                      <option className="option-size">{item}</option>
                    </>
                  );
                })}
              </select>
              <hr />
              <Colors onShow={onShow} photos={props.productDetails?.photos}></Colors>
              <br />   
            
           
               <button onClick={() => !addItemtoCart(product)} className='btn-cart'>Añadir al carrito</button> 
            
             
        
            
              <p className='regards-politics' onClick={toogleShowSidebashop}>
                Envios, cambios y devoluciones
              </p>
              <div className="content-blocker">
                <div className={show}>
                  <div className="text-container">
                    <div></div>
                    <h3>Envíos cambios y devoluciones</h3>
                    <h4>Envío</h4>
                    <p>RECOGIDA EN TIENDA CASAVERDECOSTURA - GRATUITO</p>
                    <p>En la tienda que elijas en 2-3 días laborables.</p>
                    <p>ENTREGA A DOMICILIO:</p>
                    <ul className="delivery_home__list">
                      <li>
                        ENTREGA GARANTIZADA AL DÍA SIGUIENTE DE LA COMPRA - 4,95
                        EUR.
                        <br /> Pedidos realizados de Lunes a Sábado.
                      </li>
                      <li>
                        ENTREGA ESTÁNDAR - 3,95 EUR / GRATUITO (PEDIDOS A PARTIR
                        DE 30 EUR)
                        <br />
                        El plazo estimado de entrega oscilará entre 2-3 días
                        laborables, dependiendo de la dirección de entrega.
                      </li>
                      <li>
                        EN EL MISMO DÍA DE LA COMPRA - 5,95 EUR
                        <br /> Entrega en el mismo día en Madrid para todos los
                        pedidos realizados de lunes a viernes
                        <br /> antes de las 14h.
                      </li>
                    </ul>
                    <p>
                      PUNTO DE ENTREGA - 3,95 EUR / GRATUITO (PEDIDOS A PARTIR
                      DE 30 EUR)
                    </p>
                    <p>
                      En el punto de entrega que elijas en 2-3 días laborables.
                    </p>
                    <p>
                      Para los pedidos preparados en distintos centros de
                      distribución, te ofreceremos dos opciones:
                    </p>
                    <ul>
                      <li>
                        Recibirlo en una única entrega (gratis por compras
                        superiores a 30 EUR){" "}
                      </li>
                      <li>
                        Recibirlo más rápido en varias entregas (con un coste
                        adicional de 2 EUR)
                      </li>
                    </ul>
                    <p>
                      Los plazos indicados anteriormente se verán ampliados para
                      Baleares, Ceuta, Melilla y zonas remotas.
                    </p>
                    <p>
                      En el momento de procesar tu compra, te mostraremos los
                      métodos de envío disponibles, el coste y la fecha de
                      entrega de tu pedido.
                    </p>
                    <h4>CAMBIOS Y DEVOLUCIONES</h4>
                    <p>
                      Dispones de 30 días desde la fecha de envío para realizar
                      una devolución de tu compra de
                      <br /> casaverdecostura.com de manera GRATUITA
                    </p>
                    <ul>
                      <li>En tienda CASAVERDECOSTURA.ES</li>
                      <p>
                        Puedes cambiar o devolver artículos de forma gratuita en
                        cualquier tienda de Zara del país/región donde
                        realizaste la compra.
                      </p>
                      <li>DESDE DOMICILIO</li>
                      <p>
                        Puedes solicitar la recogida en tu domicilio accediendo
                        a la sección pedidos y devoluciones.
                      </p>
                      <li>DEVOLUCIÓN EN PUNTO DE ENTREGA</li>
                      <p>Te devolvemos tu producto en punto de entrega</p>
                      <img
                        onClick={toogleShowSidebashop}
                        className="close-img"
                        src="https://res.cloudinary.com/aleksmotin/image/upload/v1651339414/image-removebg-preview_1_l0isou.png"
                      ></img>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
    </>
  )
}
