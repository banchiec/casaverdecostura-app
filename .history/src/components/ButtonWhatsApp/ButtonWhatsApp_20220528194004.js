import './buttonWhatsApp.css'
import logoWhatsApp from '../../utils/icons/WhatsApp.svg.png'

const ButtonWhatsApp = ({number, message}) => {
	const sendMessageWhatsApp = () => {
		console.log("object");
	}
	return(
		<div className="container-button-whatsApp">
			<a href={`https:/wa.me/34617982536`} >
				<img src={logoWhatsApp} alt="whatsApp"/>
			</a>
		</div>
	)
}
export default ButtonWhatsApp 