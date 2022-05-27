const CarouselCustom = () => {
	return (
			<div className="my-5 text-center container">
				<div className="row d-flex align-items-center">
					<div className="col-1 d-flex align-items-center justify-content-center">
							<a href="#carouselExampleIndicators" role="button" data-slide="prev">
								<div className="carousel-nav-icon">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink">
											<path d="m88.6,121.3c0.8,0.8 1.8,1.2 2.9,1.2s2.1-0.4 2.9-1.2c1.6-1.6 1.6-4.2 0-5.8l-51-51 51-51c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-54,53.9c-1.6,1.6-1.6,4.2 0,5.8l54,53.9z"/>
										</svg>
								</div>
							</a>
					</div>
					<div className="col-10">
							<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

								<div className="carousel-inner">
										<div className="carousel-item active">
											<div className="row">
													{/* <div style="background-image:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/flexfun04.jpg');" className="col-12 col-md d-flex align-items-center justify-content-center"> */}
													{/* </div>
														<div style="background-image:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/flexfun02.jpg');" className="col-12 col-md d-flex align-items-center justify-content-center">
													</div> */}
													{/* <div style="background-image:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/flexfun05.jpg');" className="col-12 col-md d-flex align-items-center justify-content-center" className="col-12 col-md d-flex align-items-center justify-content-center">
														<h3>Hi.</h3>
													</div> */}
											</div>
										</div>
										<div className="carousel-item">
											<div className="row">
													<div style="background-image:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/flexfun01.jpg');" className="col-12 col-md d-flex align-items-center justify-content-center">
													</div>
													<div style="background-image:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/flexfun03.jpg');" className="col-12 col-md d-flex align-items-center justify-content-center">
													</div>
													<div style="background-image:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/46992/flexfun06.jpg');" className="col-12 col-md d-flex align-items-center justify-content-center" className="col-12 col-md d-flex align-items-center justify-content-center">
													</div>
											</div>
										</div>
								</div>
							</div>
					</div>
					<div className="col-1 d-flex align-items-center justify-content-center"><a  href="#carouselExampleIndicators" data-slide="next">
							<div className="carousel-nav-icon">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" xmlns:xlink="http://www.w3.org/1999/xlink">
										<path d="m40.4,121.3c-0.8,0.8-1.8,1.2-2.9,1.2s-2.1-0.4-2.9-1.2c-1.6-1.6-1.6-4.2 0-5.8l51-51-51-51c-1.6-1.6-1.6-4.2 0-5.8 1.6-1.6 4.2-1.6 5.8,0l53.9,53.9c1.6,1.6 1.6,4.2 0,5.8l-53.9,53.9z"/>
								</svg>
							</div>
							</a>
					</div>
				</div>
			</div>
	)
}
export default CarouselCustom