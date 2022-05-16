 import "./HomePage.css" 
 import { Footer } from "../../components/Footer/Footer";

function HomePage() {
  return (
    <> 
    <div className="bgimg-1">
      <div className="caption">  
      <h1>NUESTRA TIENDA<br/> CALLE DE GOYA 91</h1>
      </div> 
    </div>  
    <section className="section bgimg-2">  
    <div className="section-content">
        <h3 className="section-title">FIESTAS 2022 </h3>  
        <p>Invitada perfecta</p> 
        <button >Entra y mira</button>
        </div>
      </section> 
      <Footer></Footer>
    </>
  );
}

export default HomePage;
