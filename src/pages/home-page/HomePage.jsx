import "./HomePage.css" 
import { Footer } from "../../components/Footer/Footer"; 
import { Link } from "react-router-dom";
import { BsPlayFill } from 'react-icons/bs'
import {ContainerHome} from './HomePageStyled'
import CarouselCustom from "./components/CarouselCustom/CarouselCustom";

function HomePage() {
  return (
    <>
      <ContainerHome>   
        <div className="container-home">
          <div className="bgimg-1">
            <div className="caption">  
              <h1>NUESTRA TIENDA
                <br/>
                <p className="section-direction">
                  Calle Goya, 99
                </p>
                <div>
                  <BsPlayFill/>
                  Ver vídeo de la passarella
                </div>
              </h1>
            </div> 
          </div>  
        </div>
        <section className="section bgimg-2">  
          <div className="section-party">
            <h3 className="section-title">FIESTAS 2022 </h3>  
            <p>Invitada perfecta</p> 
            <Link 
              to={`/collections`}
            >
              <button >Entra y mira</button>
            </Link>
          </div>
        </section> 
        <section className="section bgimg-2P">  
          <div className="section-girlfriends">
            <h3 className="section-title">NOVIAS</h3>  
            <p>La novia perfecta</p> 
            <Link 
              to={`/collections`}
            >
              <button >Entra y mira</button>
            </Link>
          </div>
        </section> 
        <section className="section bgimg-2">  
          <div className="section-party">
            <h3 className="section-title">COLECCIONES</h3>  
            <p>El vestido perfecto</p> 
            <Link 
              to={`/collections`}
            >
              <button >Entra y mira</button>
            </Link>
          </div>
        </section> 
        <CarouselCustom/>
        <Footer/>
      </ContainerHome>
    </>
  );
}

export default HomePage;
