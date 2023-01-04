import React, { useEffect, useState } from "react";
import ProductsService from "../../services/products.service";
import { Link } from "react-router-dom";
import "./AllCollections.css";
import { Footer } from "../../components/Footer/Footer";
export const AllCollections = () => {
  return (
    <>
      <section className="summercollection">
        <h2 className="summercollection__title titlecollection">VERANO</h2>
        <hr className="line" />
        <div className="collections-container">
          <div className="collections-content">
            <div className="collections-content-image">
              <img className="collection-image" src="vestidoejemplo1.jpg"></img>
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
                <button className="summmercollection__button collection-button">
                  Explorar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="exclusivecollection">
        <h2 className="exclusivecollection__title titlecollection">
          EXCLUSIVA
        </h2>
        <hr />
        <div className="collections-container">
          <div className="collections-content">
            <div className="collections-content-image">
              <img className="collection-image" src="vestidoejemplo2.jpg"></img>
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
                <button className="exclusivecollection__button collection-button">
                  Explorar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="springcollection">
        <h2 className="springcollection__title titlecollection">Primavera</h2>
        <hr />
        <div className="collections-container">
          <div className="collections-content">
            <div className="collections-content-image">
              <img className="collection-image" src="vestidoejemplo3.jpg"></img>
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
                <button className="springcollection__button collection-button">
                  Explorar
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="wintercollection">
        <h2 className="wintercollection__title titlecollection">Invierno</h2>
        <hr />
        <div className="collections-container">
          <div className="collections-content">
            <div className="collections-content-image">
              <img className="collection-image" src="vestidoejemplo4.jpg"></img>
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
                <button className="wintercollection__button collection-button">
                  Explorar
                </button>{" "}
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
