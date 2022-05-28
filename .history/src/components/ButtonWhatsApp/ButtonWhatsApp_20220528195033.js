import './buttonWhatsApp.css'
import logoWhatsApp from '../../utils/icons/WhatsApp.svg.png'

const ButtonWhatsApp = ({number, message}) => {
	return(
		<>
			<a href={`https:/wa.me/34610600745`} className="container-button-whatApp" >
				<img src={logoWhatsApp} alt="whatsApp"/>
			</a>
		</>
	)
}
export default ButtonWhatsApp 