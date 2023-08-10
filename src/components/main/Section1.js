import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Cards from '../cards/Cards'

const Section1 = () => {
  return (
    <React.Fragment>
    <Container fluid>
        <Row className='bg-secondary'>
            <Col className='fs-1 text-center' >The Generics</Col>
        </Row>
    </Container>
    <Cards />
    </React.Fragment>
  )
}

export default Section1