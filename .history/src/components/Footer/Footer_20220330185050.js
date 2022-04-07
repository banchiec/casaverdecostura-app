 import "./../Footer/Footer.css"  

 export function Footer(){
      return (
          <> 
             <footer class="site-footer">
                  <div class="">
                    <div class="container-text-footer">
                      <div class="col-sm-12 col-md-6">
                        <ul class="footer-links">
                          <li><a href="#">Aviso legal</a></li>
                          <li><a href="#">Reclamaciones</a></li>
                          <li><a href="#">Política de envíos</a></li>
                          <li><a href="#">Política de cookies</a></li>
                          <li><a href="#">Sitemap</a></li>
                        </ul>
                      </div>

                      <div class="col-xs-6 col-md-3">
                        <h6>SÍGUENOS</h6>
                        <p>Suscríbete para recibir antes que nadie las novedades de Casaverdecostura, ofertas especiales, obsequios gratuitos y sorpresas exclusivas </p>
                        <ul class="social-icons">
                          <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                          <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                          <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
                          <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
                        </ul>
                      </div> 
                      <div></div>
                      <div class="col-xs-6 col-md-3">
                        <h6>Links</h6>  
                        <ul class="footer-links">
                          <li><a href="#">FAQ</a></li>
                          <li><a href="#">Búsqueda</a></li>
                          <li><a href="#">Contáctanos</a></li>
                          <li><a href="#">Sobre Nosotros</a></li>
                        </ul>
                      </div>
                    </div>
                    <hr/>
                  </div>
                  <div class="container-copyright">
                    <div class="row">
                      <div class="col-md-8 col-sm-6 col-xs-12">
                        <p class="copyright-text">Copyright &copy; 2022 Todos los derechos reservados por 
                          <a className="copyright-item" href="#"> Casaverde</a>.
                        </p> 
                      </div>

                      <div class="col-md-4 col-sm-6 col-xs-12">
              
                      </div>
                    </div>
                  </div>
            </footer>
          </>
      )
 } 


 