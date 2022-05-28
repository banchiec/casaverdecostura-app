import { useState } from 'react'
import './extendedInformation.css'

const ExtendedInformation = () =>{
	const [showDescription, setShowDescription] = useState(true)
	const [showProductDetails, setShowProductDetails] = useState(false)
	return (
		<div className="container-extended-information">
			<div className="title-extended">
				<h4 onClick={() => setShowDescription(true)}>Descripción</h4>
				<h4>Detalles del Producto</h4>
	  	</div>
			{showDescription && (
				<div>
					<h1>Description</h1>
				</div>
			)}
		</div>
	)
}
export default ExtendedInformation
