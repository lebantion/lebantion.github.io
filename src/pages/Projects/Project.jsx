import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Project.css';
import logo from '../../assets/project.png'

import Aos from "aos";
import "aos/dist/aos.css";


function Projects() {
  return (
   <div class="Card">
    <h2> Personal Project </h2>
    <Row xs={3} md={3} className="g-4">
        <Col>
          <Card>
            <Card.Img variant="middle" src={logo} width="30px" height="30px" />
            <Card.Body class="Text">
              <Card.Title>GOMOKU AI</Card.Title>
              <Card.Text>
                Project Description
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="middle" src={logo} width="30px" height="30px"/>
            <Card.Body class="Text">
              <Card.Title>Web Developing</Card.Title>
              <Card.Text>
                Project Description
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="middle" src={logo} width="30px" height="30px" />
            <Card.Body class="Text">
              <Card.Title>Buckeye Market</Card.Title>
              <Card.Text>
                Project Description
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img variant="middle" src={logo} width="30px" height="30px" />
            <Card.Body class="Text">
              <Card.Title>OSU Rate My Professor</Card.Title>
              <Card.Text>
                Project Description
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
   </div>
  );
}

export default Projects;