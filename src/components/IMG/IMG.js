import React from 'react';
import Card from 'react-bootstrap/Card';
import ButtonNews from '../../UI/ButtonNews/ButtonNews';
const Img = (props) => 
    <Card>
        <Card.Img variant="top" src={props.srcImage} alt="News Soccer"/>
        <Card.Body>
            <Card.Text>
              {props.shortDescription}
            </Card.Text>
        <ButtonNews btnType='Details' click={props.clickDetail}> ' Curious ?</ButtonNews>   
        </Card.Body>
    </Card>

export default Img;