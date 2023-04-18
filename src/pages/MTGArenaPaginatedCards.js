import axios from "axios";
import { useEffect,useState } from "react";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.css';
import Pagination from 'react-bootstrap/Pagination';
import { useParams } from "react-router-dom";
//import { Pagination } from 'antd';
//import Button from 'react-bootstrap/Button';
//import { useNavigate } from "react-router-dom"; 

function MTGArenaPaginatedCards(){
    const [mtgArenaPageCards, setMTGArenaPageCards] = useState([]);
    let {id} = useParams();
    //const navigate = useNavigate();

    //const [pageTotal, setPageTotal] = useState("");
    //const [page, setPage] = useState(page);
    //const [cardPerPage, setCardPerPage] = useState(5);

    //This works when no pagination is used






    useEffect(() => {
        axios.get("http://localhost:5239/api/MTGArenaCards/1")
        .then ((response) => {
            setMTGArenaPageCards((currentData) => {
                console.log(response.data.mtgArenaCards)
                return response.data.mtgArenaCards;
            });
        });
    }, []);

    return (
       
        <>

            <Row xs={1} md={5} className="g-4 mt-1">
                {mtgArenaPageCards.map((mtgacard)=> (
                    <Col sm={2} key={mtgacard[0]}>
                    <Card style={{ width: '18rem'}}>
                        <Card.Img variant="top" src={mtgacard.imageUrl} />
                        <Card.Body>
                        <Card.Title>{mtgacard.cardName} ID:{id}</Card.Title>
                        </Card.Body>
                    </Card>
                    </Col>
            ))}
            </Row>

        </> 
    );
}

export default MTGArenaPaginatedCards;