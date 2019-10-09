import React from 'react';
import BackdropClass from './Backdrop.module.css';
const Backdrop = (props) => {
    return (
        props.show ? <div className={BackdropClass.Backdrop} onClick={props.clickRem}></div> : null
    )
}
export default Backdrop