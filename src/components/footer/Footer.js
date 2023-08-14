import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
  return (
        <Container fluid>
        <Row className="bg-black mt-5 p-5 d-flex">
          <Col className="fs-1 text-right">The Generics</Col>
          <Col className='d-flex justify-content-end '>
          <a href='https://www.youtube.com/' style={{color: 'white', textDecoration:'none', fontSize: '30px', paddingRight: '50px'}}>YT</a>
          <a href='https://www.facebook.com/' style={{color: 'white', textDecoration:'none', fontSize: '30px', paddingRight: '50px'}}>FB</a>
           <a href='https://www.twitter.com/' style={{color: 'white', textDecoration:'none', fontSize: '30px', paddingRight: '50px'}}>X</a>
          </Col>
        </Row>
      </Container>
  )
}

export default Footer