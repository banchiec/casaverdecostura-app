import './buttonWhatsApp.css'
import logoWhatsApp from '../../utils/icons/WhatsApp.svg.png'

const ButtonWhatsApp = () => {
	const sendMessageWhatsApp = () => {

	}
	return(
		<div className="container-button-whatsApp" onClick={sendMessageWhatsApp}>
			<img src={logoWhatsApp} alt="whatsApp"/>
			{/* <i src={logoWhatsApp}/> */}
		</div>
	)
}
export default ButtonWhatsApp 