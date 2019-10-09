import React from 'react';
import ButtonCSS from './ButtonNews.module.css';
const ButtonNews = (props) => 
    <button className={[ButtonCSS.Button,ButtonCSS[props.btnType]].join(' ')} onClick={props.click}>{props.children}</button>

    export default ButtonNews;
