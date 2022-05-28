import './buttonWhatsApp.css'
import logoWhatsApp from '../../utils/icons/WhatsApp.svg.png'

const ButtonWhatsApp = ({number, message}) => {
	const sendMessageWhatsApp = () => {
		console.log("object");
	}
	return(
		<div className="container-button-whatsApp" onClick={sendMessageWhatsApp}>
			<img src={logoWhatsApp} alt="whatsApp"/>
		</div>
	)
}
export default ButtonWhatsApp 