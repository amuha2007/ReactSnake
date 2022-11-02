import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const Square = ({type,settings}) =>{





let snakeStyles = {
    backgroundColor:settings[3],
    boxShadow: `0px 0px 5px 1px ${settings[3]}`,
    width: '15px',
    height: '15px',
    borderRadius: '4px',
    margin: '1px'
}

let foodStyles = {
    backgroundColor:settings[4],
    boxShadow: `0px 0px 5px 1px ${settings[4]}`,
    width: '15px',
    height: '15px',
    borderRadius: '4px',
    margin: '1px'
}

let squareStyles= {
    width: '15px',
    height: '15px',
    backgroundColor: 'rgb(12, 12, 12)',
    borderRadius: '4px',
    margin: '1px'
}

    return(
        type === 'snake'?
            <div style={snakeStyles}></div>
            : type === 'food'?
            <div style={foodStyles}></div>
            :<div style={squareStyles}></div>
    )
}

export default Square