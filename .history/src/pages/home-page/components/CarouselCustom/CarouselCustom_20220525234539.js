import { useEffect } from "react";
import { useState } from "react";
import  Carousel  from "react-bootstrap/Carousel"
import ProductsService  from "../../../../services/products.service" 

const CarouselCustom = () => {

 let ProductService = new ProductsService();    
  const [products, setProducts]  = useState([]);    
  const getProducts =  () => {  
      ProductService 
      .getProducts() 
      .then((products) => { 
       setProducts(products?.data) 
      })
      .catch(err => console.log("Error retreiving products", err))     
  } 
	useEffect(() => {
		getProducts()
	},[])
	return (
			<Carousel>
				{products.map((item,i) => {
					return(
						<Carousel.Item  className='carousel-img' key={i} interval={1000}>
							<img
								className="d-block w-100"
								src={item?.photos[0]?.url}
								alt={item?.name}
							/>
							<Carousel.Caption >
								<div className="carousel-description">
									<h3>{item?.name}</h3>
									{/* <p>{item?.description}</p> */}
									<span>{item?.price}</span>
								</div>
							</Carousel.Caption>
						</Carousel.Item>
					)
				})}

				{/* <Carousel.Item interval={1000}>
					<img
						className="d-block w-100"
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/flexfun05.jpg"
						alt="First slide"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item interval={500}>
					<img
						className="d-block w-100"
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/flexfun05.jpg"
						alt="Second slide"
					/>
					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/flexfun05.jpg"
						alt="Third slide"
					/>
					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
					</Carousel.Caption>
				</Carousel.Item> */}
			</Carousel>
	)
}

export default CarouselCustom