import axios from "axios";
import { useRef } from "react";
import { useNavigate } from "react-router-dom"; 
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function AddMTGArenaCard(){

    const CardName = useRef("");
    const CardType = useRef("");
    const CardScript = useRef("");
    const ImageURL = useRef("");

    const navigate = useNavigate();

    function addCardHandler(){

        var payload = {
            "CardName": CardName.current.value,
            "CardType": CardType.current.value,
            "CardScript": CardScript.current.value,
            "ImageURL": ImageURL.current.value
        }

        axios.post("http://localhost:5239/api/MTGArenaCards", payload)
        .then((response) => {
            //add page routing later
            navigate("/1");
        })        
    }


    return (
    <>
    <legend>Add a new Card</legend>
    <Form>
      <Form.Group className="mb-3" controlId="formMTGArencaCard">
        <Form.Label>Card Name</Form.Label>
        <Form.Control type="text" placeholder="Enter card name" ref={CardName}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCardType">
        <Form.Label>Card Type</Form.Label>
        <Form.Control type="text" placeholder="Enter card type" ref={CardType}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCardScript">
        <Form.Label>Card Script</Form.Label>
        <Form.Control type="text" placeholder="Enter card script" ref={CardScript}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formCardImageURL">
        <Form.Label>Card Image URL</Form.Label>
        <Form.Control type="text" placeholder="Enter card name" ref={ImageURL}/>
      </Form.Group>

      <Button variant="primary" type="button" onClick={addCardHandler}>
        Add Card
      </Button>
    </Form>
    </>

)}

export default AddMTGArenaCard