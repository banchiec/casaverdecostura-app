import React, { useEffect, useState } from 'react'
import ProductsService from '../../services/products.service'
import { useParams } from 'react-router-dom'
import { Gallery } from '../../components/Gallery/Gallery'
import './Details.css'
export const Details = (props) => {
	const ProductService = new ProductsService()
	const [productDetails, setProductDetails] = useState(null)
	const { id } = useParams()

	useEffect(() => {
		getProduct(id)
		//eslint-disable-next-line
	}, [])

	const getProduct = (id) => {
		ProductService.getOneProduct(id)
			.then((data) => {
				setProductDetails(data?.data)
			})
			.catch((err) => console.log(err))
	}

	return (
		<>
			<div className="content-container">
				{productDetails ? (
					<>
						<Gallery photos={productDetails.photos}></Gallery>
						<div className="product-info">
							<p className="product-name">{productDetails?.name}</p>
							<p className="product-description">{productDetails?.description}</p>
							<span className="product-price">{productDetails?.price} EUR</span>
							<br />
							<hr />
							<select>
								{productDetails?.size.map((item, i) => {
									return (
										<>
											<option className="option-size">{item}</option>
										</>
									)
								})}
							</select>
							<hr />
							<button className="shop-button">Añadir a la cesta</button>
							<p>Envios, cambios y devoluciones</p>
						</div>
					</>
				) : (
					<p>Loading</p>
				)}
			</div>
		</>
	)
}
