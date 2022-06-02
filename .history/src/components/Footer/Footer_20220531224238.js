import { Container, Row, Col } from "react-bootstrap";
import "./../Footer/Footer.css";

 export function Footer(){
      return (
        <Container fluid>
          <Row>
            <Col xs={12} md={12} lg={12}>
                  <footer className="site-footer">
                      <div className="container-content">
                        <div className="container-text-footer">
                          <div className="subscribe">
                            <h6>SÍGUENOS</h6>
                            <ul className="social-icons">
                              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
                              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
                            </ul>
                          </div> 
                          <div className="links">
                            <ul className="footer-links">
                              <li><a href="#">FAQ</a></li> 
                              <li><a href="#">Búsqueda</a></li>
                              <li><a href="#">Contáctanos</a></li>
                              <li><a href="#">Sobre Nosotros</a></li>
                            </ul>
                          </div>
                        </div>
                        <hr/>
                      </div>
                      <div className="container-copyright">
                        <div className="row">
                          <div className="laws">
                            <p className="copyright-text">Copyright &copy; 2022 Todos los derechos reservados por 
                              <a className="copyright-item" href="#"> Casaverde</a>.
                            </p> 
                          </div>
                        </div>
                      </div>
                </footer>
            </Col>
          </Row>
        </Container>
      )
 } 