import React, { useContext } from 'react'
import { cartContext } from '../context/CartContext'
import styles from './styles.module.scss'

export const ItemCart2 = ({ item }) => {
	const { addItemtoCart, deleteItemfromCart } = useContext(cartContext)
	return (
		<div className={styles.cartItem}>
			<img src={`http://localhost:5005/${item.imageUrl}`} alt={item.name} />
			<div className={styles.dataContainer}>
				<div className={styles.left}>
					<p>{item.name}</p>
					<div className={styles.buttons}>
						<button onClick={() => addItemtoCart(item.id)}>AGREGAR</button>
						<button onClick={() => deleteItemfromCart(item.id)}>SACAR</button>
					</div>
				</div>
				<div className={styles.right}>
					<div>{item.amount}</div>
					<p>Total: ${item.amount * item.price}</p>
				</div>
			</div>
		</div>
	)
}
