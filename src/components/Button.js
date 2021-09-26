import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline']
const SIZES = ['btn--medium', 'btn--large', 'btn--mobile', 'btn--wide']
const COLOR = ['primary', 'red', 'green', 'blue']

export const Button = ({
    childern, 
    type, 
    onClick, 
    buttonSize, 
    buttonStyle, 
    buttonColor
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) ?buttonStyle : STYLES[0]
    const checkButtonSize = SIZES.includes(buttonSize) ?buttonSize : SIZES[0]
    const checkbuttonColor = COLOR.includes(buttonColor) ?buttonColor : COLOR[0] 
    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSize} ${checkbuttonColor}`} onClick={onClick} type={type}>{childern}</button>
    )
}
 