import { Button, Card, Container, Row, Col } from "react-bootstrap"

const CardCollection = ({image, title, text}) => {
	return(
		<Container>
			<Row>
				<Col>
					<Card>
						<Card.Header as="h5">{title}</Card.Header>
						<Card.Body>
							<img
								// src={image}
								alt='image'
							/>
							<Card.Title>Special title treatment</Card.Title>
							<Card.Text>
								With supporting text below as a natural lead-in to additional content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>

	)
}
export default CardCollection