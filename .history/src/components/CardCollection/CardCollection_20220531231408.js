import { Button, Card, Container, Row, Col } from "react-bootstrap"

const CardCollection = () => {
	return(
		<Container>
			<Row>
				<Col>
					<Card>
						<Card.Header as="h5">Featured</Card.Header>
						<Card.Body>
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