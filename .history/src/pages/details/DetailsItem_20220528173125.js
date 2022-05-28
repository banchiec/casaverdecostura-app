import React, { useContext, useEffect, useState } from 'react'
import "./Details.css";    
import { Gallery } from '../../components/Gallery/Gallery';    
import { Colors } from '../../components/Colors/Colors';    
import { FacebookShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, TwitterIcon } from "react-share";
import { cartContext } from '../../components/context/CartContext'; 
import  { BiShoppingBag } from 'react-icons/bi'

export const DetailsItem = (props) => {     
    let images = props.photos?.map(item => item.url);
    const [imageShow, setImageShow] = useState(images[0]);     
    const [sizes, setSizes] = useState(props.size[0]);           
    const [color, setColor] = useState([props.photos[0].color]);     
    const [handle, setHandle] = useState();
    let imageUrl = imageShow;    
    const {name, price, _id, description, } = props.productDetails; 
    const product = {name,imageUrl,_id,description,price, sizes, color};  
    const [showSidebarshop, setShowSidebarshop] = useState(true);   
    const [show, setShow] = useState("");     
   const [isActive, setActive] = useState(false);
    const { addItemtoCart} = useContext(cartContext);                                                                                  
    const toogleShowSidebashop = () => {
        setShowSidebarshop(!showSidebarshop);
        console.log(showSidebarshop);
        showSidebarshop ? setShow("show") : setShow("");
    };   
    const onShow = (e, i ) => {    
      console.log(e.target.getAttribute("data-index"))
        setColor(e.target.value)                                        
        setActive(!isActive);
      };   
    const handleSize = (e) => {
      if(e.target.name === "sizes") {                               
        setSizes(e.target.value)
      }
    } 
 

  return (
    <>   
     <Gallery activeImage={imageShow} setImageShow={setImageShow} photos={props.productDetails?.photos}></Gallery>
      <div className="container-product-info">
        <div className="container-product-text">
          <p className="product-name">{props.productDetails?.name}</p>
          <p className="product-price">{props.productDetails?.price} €</p> 
          <p>Impuestos incluidos</p>
          <p className="product-description">
            {props.productDetails?.description}
          </p>  
          <hr />   
          <div>
            <label for="size">Talla</label>
            <select id='size' className="select-size">
              {props.productDetails?.size.map((item, i) => {
                return (
                  <>
                    <option className="option-size">{item}</option>
                  </>
                );
              })}
          </div>
          </select>
          <p>Color</p> 
          <Colors onShow={onShow} active={isActive}  photos={props.productDetails?.photos}></Colors>
          <hr />   
        <button onClick={() => !addItemtoCart(product)} className='btn-cart'> <BiShoppingBag/> Añadir al carrito</button>  
      </div>
      <hr />   
      <div className='share-icons'>
        <p>Compartir</p>       
        <div>
          <FacebookShareButton
            url={"https://peing.net/ja/"}
            quote={"フェイスブックはタイトルが付けれるようです"}
            hashtag={"#hashtag"}
            description={"aiueo"}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={34} round /> 
          </FacebookShareButton> 
          <TwitterShareButton
            url={"https://peing.net/ja/"}
            quote={"フェイスブックはタイトルが付けれるようです"}
            hashtag={"#hashtag"}
            description={"aiueo"}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={34} round />  
          </TwitterShareButton>
        </div>
      </div>
      <hr/>
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
              <b/> 
              <p className='regards-politics' onClick={toogleShowSidebashop}>
                Envios, cambios y devoluciones
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
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
