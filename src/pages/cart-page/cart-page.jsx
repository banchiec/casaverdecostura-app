import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../../components/context/CartContext'
import { Link } from 'react-router-dom'
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded'
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded'
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded'
import CreditScoreRoundedIcon from '@mui/icons-material/CreditScoreRounded'
import './cart-page.css'

export const Cart = () => {
	const [productLength, setProductLength] = useState(0)
	const { cartItems } = useContext(cartContext)
	console.log(cartItems)
	const { addItemtoCart, deleteItemfromCart } = useContext(cartContext)

	useEffect(() => {
		setProductLength(
			cartItems.reduce((previous, current) => previous.amount + current.amount, 0)
		)
	}, [cartItems])
	const total = cartItems.reduce(
		(previous, current) => previous + current.amount * current.price,
		0
	)
	console.log(total)

	return (
		<>
			{productLength}
			<div className="cart-container">
				<div className="cart-content-container">
					<h2>Carrito</h2>
					<hr />
					<div className="cart-info">
						{cartItems.map((item, i) => {
							console.log(item.color, 'color de producto')
							// const colorName = GetColorName(`${item.color}`)
							return (
								<>
									<div className="cart-info-content">
										<div className="cart-info-image">
											<img
												className="cart-img"
												src={`http://localhost:5005/${item?.imageUrl}`}
												alt="imagen"
											></img>
										</div>
										<div className="cart-info-general">
											<p className="cart-info-general-name">{item.name}</p>
											<div
												className="cart-info-general-color"
												style={{
													backgroundColor: `${item.color}`,
												}}
											></div>
											<p className="cart-info-general-size">Talla: {item.sizes}</p>
										</div>
										<div className="counter">
											<div onClick={() => addItemtoCart(item)} className="btn">
												+
											</div>
											<div className="count">{item.amount}</div>
											<div onClick={() => deleteItemfromCart(item)} className="btn">
												-
											</div>

											<div className="cart-content-buttons-extras">
												<div key={i} className="cart-content-total">
													{item?.amount * item?.price} €
												</div>
												<div className="cart-content-delete">
													<DeleteRoundedIcon />
												</div>
											</div>
										</div>
									</div>
								</>
							)
						})}
					</div>
				</div>
				<div className="cart-info-additionals">
					<>
						<div className="cart-info-additionals-elements">
							<div className="cart-info-additionals-quantity">
								{' '}
								{cartItems.length} artículos
							</div>
							<div className="cart-details-total"> {total} €</div>
						</div>
					</>
					<div className="cart-info-pay-button">
						<Link to={'/checkout'}>
							<button>PAGAR</button>
						</Link>
					</div>
					<div className="cart-info-links">
						<p>
							<HttpsRoundedIcon /> Política de Privacidad
						</p>
						<p>
							<LocalShippingRoundedIcon /> Condiciones Generales
						</p>
						<p>
							<CreditScoreRoundedIcon /> Política de devolución
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
