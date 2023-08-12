import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Products from './Products'


const Section1 = () => {
  return (
    <React.Fragment>
    <Container fluid>
        <Row className='bg-secondary'>
            <Col className='fs-1 text-center p-10 '  >The Generics</Col>
        </Row>
    </Container>
    <Container>
      <Products />
    </Container>
    </React.Fragment>
  )
}

export default Section1