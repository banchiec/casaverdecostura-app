import "./HomePage.css" 
import { Footer } from "../../components/Footer/Footer"; 
import { Link } from "react-router-dom";
import { BsPlayFill } from 'react-icons/bs'


function HomePage() {
  return (
    <>   
      <div className="container-home">
        <div className="bgimg-1">
          <div className="caption">  
            <h1>NUESTRA TIENDA
              <br/>
              <p className="section-direction">
                Calle Goya, 99
              </p>
              <button> Ver vídeo de la passarella</button>
            </h1>
          </div> 
        </div>  
      </div>
      <section className="section bgimg-2">  
        <div className="section-content">
          <h3 className="section-title">FIESTAS 2022 </h3>  
          <p>Invitada perfecta</p> 
          <Link to={`/collections`}><button >Entra y mira</button></Link>
        </div>
      </section> 
      <Footer></Footer>
    </>
  );
}

export default HomePage;
