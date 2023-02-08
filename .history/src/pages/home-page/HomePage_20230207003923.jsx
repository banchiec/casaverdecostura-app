import './HomePage.css'
import { Footer } from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { BsPlayFill } from 'react-icons/bs'
import { ContainerHome } from './HomePageStyled'

function HomePage() {
	return (
		<ContainerHome>
			<div className="container-home">
				<div className="section bgimg-1">
					<div className="caption">
						<h1>NUESTRA TIENDA</h1>
						<p className="section-direction">Calle Goya, 127</p>
						<div>
							<BsPlayFill />
							VER VIDEO DE LA PASSARELA
						</div>
					</div>
				</div>
			</div>
			<section className="section bgimg-2">
				<div className="section-party">
					<h3 className="section-title">FIESTAS 2022 </h3>
					<p>Invitada perfecta</p>
					<Link to={`/collections`}>
						<button>ENTRA Y MIRA</button>
					</Link>
				</div>
			</section>
			<section className="section bgimg-3">
				<div className="section-party">
					<h3 className="section-title">COLECCIONES</h3>
					<p>El vestido perfecto</p>
					<Link to={`/collections`}>
						<button>ENTRA Y MIRA</button>
					</Link>
				</div>
			</section>
			<Footer />
		</ContainerHome>
	)
}

export default HomePage
