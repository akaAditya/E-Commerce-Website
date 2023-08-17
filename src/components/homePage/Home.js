import React from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <React.Fragment>
      <Container fluid>
        <Row className="bg-secondary p-5 text-center">
          <Col className="fs-1 text-white">The Generics</Col>
        </Row>
        <Row className="bg-secondary p-5 text-center">
          <Container className="mb-2">
            <Button variant="outline-light" size="lg">
              Get Our Latest Album
            </Button>
          </Container>
          <Container className="mb-2">
            <Button className="play-btn" variant="outline-light">
              ►
            </Button>
          </Container>
        </Row>
      </Container>
      <Container fluid>
        <Row className="p-5 text-center">
          <h1 className="mb-5">Tours</h1>
          <Col>
            <Table>
              <tbody>
                <tr>
                  <td>JUL 16</td>
                  <td>DETROIT, MI</td>
                  <td>DTE ENERGY MUSIC THEATRE</td>
                  <Button className="btn btn-primary btn-sm m-2 c" variant="outline-primary">
                    Buy Ticket
                  </Button>
                </tr>
                <tr>
                  <td>JUL 19</td>
                  <td>TORONTO, ON</td>
                  <td>BUDWEISER STAGE</td>
                  <Button className="btn btn-primary btn-sm m-2" variant="outline-primary">
                    Buy Ticket
                  </Button>
                </tr>
                <tr>
                  <td>JUL 22</td>
                  <td>BRISTOW, VA</td>
                  <td>JIGGY LUBE LIVE</td>
                  <Button className="btn btn-primary btn-sm m-2" variant="outline-primary">
                    Buy Ticket
                  </Button>
                </tr>
                <tr>
                  <td>JUL 29</td>
                  <td>PHOENIX, AZ</td>
                  <td>AK-CHIN PAVILION</td>
                  <Button className="btn btn-primary btn-sm m-2" variant="outline-primary">
                    Buy Ticket
                  </Button>
                </tr>
                <tr>
                  <td>AUG 2</td>
                  <td>LAS VEGAS, NV</td>
                  <td>T-MOBILE ARENA</td>
                  <Button className="btn btn-primary btn-sm m-2" variant="outline-primary">
                    Buy Ticket
                  </Button>
                </tr>
                <tr>
                  <td>AUG 7</td>
                  <td>CONCORD, CA</td>
                  <td>CONCORD PAVILION</td>
                  <Button className="btn btn-primary btn-sm m-2" variant="outline-primary">
                    Buy Ticket
                  </Button>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
