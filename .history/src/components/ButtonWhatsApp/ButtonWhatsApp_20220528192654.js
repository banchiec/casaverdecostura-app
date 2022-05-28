import './buttonWhatsApp.css'
import logoWhatsApp from '../../utils/icons/WhatsApp.svg.png'

const ButtonWhatsApp = () => {
	return(
		<div className="container-button-whatsApp">
			<img src={logoWhatsApp} alt="whatsApp"/>
			{/* <i src={logoWhatsApp}/> */}
		</div>
	)
}
export default ButtonWhatsApp 