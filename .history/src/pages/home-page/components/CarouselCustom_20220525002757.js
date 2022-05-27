import { useEffect } from "react";

const CarouselCustom = () => {

  useEffect(() => {
    $('.inner-repeat').each(function (){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      for (var i=0;i<2;i++) {
        next=next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
      }
    })
  },[])
  return(
     <div className="col-md-12">
     <div 
       id="carouselExampleSlidesOnly" 
       className="carousel slide" 
       data-ride="carousel"
       data-type="multi"
       data-interval= "3000"
       style={{backgroundColor: 'red'}}>
      <div className="carousel-inner">
        <div id="test" className="carousel-item inner-repeat active">
          <div className="col-md-3">
            <a href="#">
              <img 
                src="http://via.placeholder.com/250/000000&amp;text=1" 
                class="img-responsive"/>      
            </a>
          </div>
        </div>
        <div id="test" className="carousel-item inner-repeat">
          <div className="col-md-3">
          <a href="#">
            <img 
              src="http://via.placeholder.com/250/000000&amp;text=2" 
              class="img-responsive"/>
          </a>
          </div>
        </div>
        <div id="test" className="carousel-item inner-repeat">
          <div className="col-md-3">
          <a href="#">
            <img
              src="http://via.placeholder.com/250/000000&amp;text=3" 
              class="img-responsive"/>
          </a>
          </div>
        </div>
        <div id="test" className="carousel-item inner-repeat">
          <div className="col-md-3">
          <a href="#">
            <img
              src="http://via.placeholder.com/250/000000&amp;text=4" 
              class="img-responsive"/>
          </a>
          </div>
        </div>
        <div id="test" className="carousel-item inner-repeat">
          <div className="col-md-3">
          <a href="#">
            <img
              src="http://via.placeholder.com/250/000000&amp;text=5" 
              class="img-responsive"/>
          </a>
          </div>
        </div>
        <div id="test" className="carousel-item inner-repeat">
          <div className="col-md-3">
          <a href="#">
            <img
              src="http://via.placeholder.com/250/000000&amp;text=6" 
              class="img-responsive"/>
          </a>
          </div>
        </div>
        <div id="test" className="carousel-item inner-repeat">
          <div className="col-md-3">
          <a href="#">
            <img
              src="http://via.placeholder.com/250/000000&amp;text=7" 
              class="img-responsive"/>
          </a>
          </div>
        </div>
        <div id="test" className="carousel-item inner-repeat">
          <div className="col-md-3">
          <a href="#">
            <img
              src="http://via.placeholder.com/250/000000&amp;text=8" 
              class="img-responsive"/>
          </a>
          </div>
        </div>
        </div>
      </div>
    </div>
    )
}
export default CarouselCustom