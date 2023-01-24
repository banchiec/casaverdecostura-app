import React, { useEffect, useState } from 'react'
import ProductsService from '../../services/products.service'
import './search-page.css'

export const Search = () => {
	const [products, setProducts] = useState([])
	console.log(products)
	let productService = new ProductsService()
	const [value, setValue] = useState('')
	const filteredProducts = products.filter((product) => {
		return product.name.toLowerCase().includes(value.toLowerCase())
	})
	const getProducts = () => {
		productService
			.getProducts()
			.then((products) => {
				setProducts(products?.data)
			})
			.catch((err) => console.log(err))
	}
	useEffect(() => {
		getProducts()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<>
			<div className="container-search">
				<div className="form">
					<form className="search_form">
						<input
							type="text"
							placeholder="ESCRIBE PARA BUSCAR"
							className="search_input"
							onChange={(event) => setValue(event.target.value)}
							autoFocus
						></input>
					</form>
				</div>
				<div className="products">
					{filteredProducts?.map((product, index) => {
						return (
							<>
								<div className="products__content">
									<img
										className="search-img"
										src={product.photos[0]?.url}
										alt="imagen"
									></img>
									<p>{product.name}</p>
								</div>
							</>
						)
					})}

					{filteredProducts.length === 0 && <h2>0 RESULTADOS</h2>}
				</div>
			</div>
		</>
	)
}
