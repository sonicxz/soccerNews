import React from 'react';
import Card from 'react-bootstrap/Card';
import ButtonNews from '../../UI/ButtonNews/ButtonNews';
const Img = (props) => 
    <Card>
        <Card.Img variant="top" src={props.srcImage} alt="News Soccer"/>
        <Card.Body>
            <Card.Text>
                <p>{props.shortDescription}</p>
            </Card.Text>
        <ButtonNews btnType='Details' click={props.clickDetail}> &nbsp; Wanna Know More<span>😃</span></ButtonNews>   
        </Card.Body>
    </Card>

export default Img;