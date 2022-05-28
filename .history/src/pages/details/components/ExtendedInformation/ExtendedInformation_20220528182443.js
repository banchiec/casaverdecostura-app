import './extendedInformation.css'

const ExtendedInformation = () =>{
	const [showDescription, setShowDescription] = useState(true)
	return (
		<div className="container-extended-information">
			<div className="title-extended">
				<h4>Descripción</h4>
				<h4>Detalles del Producto</h4>
	  	</div>
		</div>
	)
}
export default ExtendedInformation
