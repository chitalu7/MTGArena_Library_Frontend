import axios from "axios";
import {useEffect, useState } from "react"; 
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
//import Button from 'react-bootstrap/Button';
//import { useNavigate } from "react-router-dom";


function AllMTGArenaCards(){
    const [mtgArenaCards, setMTGArenaCards] = useState([]);

    //const navigate = useNavigate();

    //This works without errors but only displays the data in the console. Notice the /1 for page 1
    /*useEffect(() => {
        fetch("http://localhost:5239/api/MTGArenaCards/1")
        .then ((response) => response.json())
        .then((json) => console.log(json))
          
    }, []);*/
    

    //This works when no pagination is used
    useEffect(() => {
        axios.get("http://localhost:5239/api/MTGArenaCards")
        .then ((response) => {
            setMTGArenaCards((currentData) => {
                console.log(response.data)
                return response.data;
            });
        });
    }, []);

    return (
        <>
        <Row xs={1} md={3} className="g-4 mt-1">
            {mtgArenaCards.map((mtgacard)=> (
                <Col key={mtgacard.id}>
                <Card>
                    <Card.Img variant="top" src={mtgacard.imageUrl} />
                    <Card.Body>
                    <Card.Title>{mtgacard.cardName}</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
        ))}
        </Row>
    </>
    );
     
}

export default AllMTGArenaCards;