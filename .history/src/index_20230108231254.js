import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
// import { Elements } from '@stripe/react-stripe-js'
// import { loadStripe } from '@stripe/stripe-js'
import { CartProvider } from './components/context/CartContext'
import { FavoritesProvider } from './components/context/FavoritesContext'

// const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<CartProvider>
				<FavoritesProvider>
					{/* <Elements stripe={stripePromise}> */}
					<App />
					{/* </Elements> */}
				</FavoritesProvider>
			</CartProvider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
)
