 import "./HomePage.css" 
 import { Footer } from "../../components/Footer/Footer"; 
 import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>   
      <div className="container-home">
        <div className="bgimg-1">
          <div className="caption">  
            <h1>NUESTRA TIENDA
              <br/>
              <h3>
                CALLE DE GOYA 99
              </h3>
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
