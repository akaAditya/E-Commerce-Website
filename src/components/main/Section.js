import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Products from './Products'


const Section = () => {
  return (
    <React.Fragment>
    <Container fluid>
        <Row className='bg-secondary p-5'>
            <Col className='fs-1 text-center'  >The Generics</Col>
        </Row>
    </Container>
    <Container>
      <Products />
    </Container>
    </React.Fragment>
  )
}

export default Section;