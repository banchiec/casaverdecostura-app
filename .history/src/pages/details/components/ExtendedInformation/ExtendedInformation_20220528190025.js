import { useState } from 'react'
import './extendedInformation.css'

const ExtendedInformation = ({product}) =>{
	const [showDescription, setShowDescription] = useState(true)
	const [showProductDetails, setShowProductDetails] = useState(false)

	const handleShowDescription = () => {
		setShowProductDetails(false)
		setShowDescription(true)
	}
	const handleShowDetails = () => {
		setShowDescription(false)
		setShowProductDetails(true)
	}
	return (
		<div className="container-extended-information">
			<div className="title-extended">
				<h4 onClick={() => handleShowDescription()}>Descripción</h4>
				<h4 onClick={() => handleShowDetails()}>Detalles del Producto</h4>
	  	</div>
			{showDescription && (
				<div className="container-text-description">
					<p>{product.description}</p>
				</div>
			)}
			{showProductDetails && (
				<div className="container-text-description">
					<p>{`Nombre: ${product.name}`}</p>
					<p>{`Price: ${product.price}`}</p>
				</div>
			)}
		</div>
	)
}
export default ExtendedInformation