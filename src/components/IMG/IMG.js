import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import ShortDescription from '../ShortDescription/ShortDescription';

const Img = (props) => 
    <Card>
        <Card.Img variant="top" src={props.srcImage} alt="News Soccer"/>
        <Card.Body>
            <Card.Text>
                <ShortDescription shortDescription="ShortParagrapghContaining News"></ShortDescription>
            </Card.Text>
            <Button variant="primary">Curious ?</Button>
        </Card.Body>
    </Card>

export default Img;