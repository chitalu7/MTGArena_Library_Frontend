import { useNavigate } from "react-router-dom"; 
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Pagination from 'react-bootstrap/Pagination';
import { useParams } from "react-router-dom";
// import Button from 'react-bootstrap/Button';
// import { useNavigate } from "react-router-dom"; 
//import Nav from 'react-bootstrap/Nav';
//import Card from 'react-bootstrap/Card';



function Layout(props) {

  // const navigate = useNavigate();
  const navigate = useNavigate();
  let {id} = useParams();


  return (
    <>
  
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>MTG Arena Card Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />       
      </Container>
    </Navbar>
    
    
    <Row className="ms-5 mt-4">
            <Col sm={{ span: 2 }}>

                <Button className="ms-5" variant="primary" type="button" onClick={() => {
                    navigate("/add-card");
                }}>
                    Add Card
                </Button>

            </Col>

            <Col md={{ span: 2 }}>

              <Button variant="primary" type="button" onClick={() => {
                  navigate("/1");
              }}>
                  View Paginated Cards
              </Button>

            </Col>

            <Col md={{ span: 2 }}>

              <Button variant="primary" type="button" onClick={() => {
                  navigate("/");
              }}>
                  View All Cards
              </Button>

            </Col>

      </Row>

        

       

    <Container>{props.children}</Container>


    <div style={{ display: 'block', width: 400, padding: 30, margin: 'auto' }}>
                <Pagination>
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Item>{2}</Pagination.Item>
                    <Pagination.Item>{3}</Pagination.Item>
                    <Pagination.Item>{4}</Pagination.Item>
                    <Pagination.Item>{5}</Pagination.Item>
                    <Pagination.Next />
                </Pagination>
                </div>


    </>
  );
}

export default Layout;