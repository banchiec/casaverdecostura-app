import { useState } from 'react'
import './extendedInformation.css'

const ExtendedInformation = () =>{
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
				<div>
					<h1>Description</h1>
				</div>
			)}
			{showProductDetails && (
				<h1>Details</h1>
			)}
		</div>
	)
}
export default ExtendedInformation