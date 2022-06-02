import React, { useEffect, useState } from "react";
import ProductsService from "../../services/products.service";  
import { Link } from "react-router-dom";
import "./AllCollections.css";
import CardCollection from "../../components/CardCollection/CardCollection";
export const AllCollections = () => {
  const [product, setProduct] = useState([]);
  let productService = new ProductsService();
  let getCollectionsPhotos = () => {
    productService.getProducts().then((product) => {
      console.log(product);
      setProduct(product.data);
    });
  };
  useEffect(() => {
    getCollectionsPhotos();
  }, []);
  return (
    <>
      <section id="Verano">
        <h2 className="title">VERANO</h2>
        <hr />
        <div className="collections-container">
          <div className="collections-content">
            <div className="collections-content-image">
              <img
                className="collection-image"
                src={product[0]?.photos[0].url}
              ></img>
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
              <Link to={"/summer"}>
                <button>Explorar</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="Invierno">
        <h2 className="title">EXCLUSIVA</h2>
        <hr />
        <div className="collections-container">
          <div className="collections-content">
            <div className="collections-content-image">
              <img
                className="collection-image"
                src={product[0]?.photos[0].url}
              ></img>
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
              <Link to={"/exclusive"}>
                <button>Explorar</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="Spring">
        <h2 className="title">Primavera</h2>
        <hr />
        <div className="collections-container">
          <div className="collections-content">
            <div className="collections-content-image">
              <img
                className="collection-image"
                src={product[0]?.photos[0].url}
              ></img>
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
              <Link to={"/spring"}>
                {" "}
                <button className="explore" >Explorar</button>{" "}
              </Link> 
            </div>
          </div>
        </div>
      </section>
      <section id="Winter">
        <h2 className="title">Invierno</h2>
        <hr />
        <div className="collections-container">
          <div className="collections-content">
            <div className="collections-content-image">
              <img
                className="collection-image"
                src={product[0]?.photos[0].url}
              ></img>
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
              <Link to={"/winter"}>
                {" "}
                <button>Explorar</button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CardCollection image={product[0]?.phostos[0].url}/>
    </>
  );
};
