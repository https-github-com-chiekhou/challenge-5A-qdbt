import { Row, Col, Container } from 'react-bootstrap'


export const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className='bg-dark'>
            <Container >
                <Row>
                    <Col className='text-center text-white py-3'>
                        <p> QDBT &copy; {currentYear}</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}
