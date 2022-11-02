import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import cl from './styleButtonStart.css';


const Button=(props)=>{
   
    
    return(
        props.type=='startButton'?
            props.start[0]==false?
            <button className='button' onClick={props.start[1]}>Ready to crawl?</button>
            :
            <button className='button' onClick={props.start[1]}>End</button>
        :null
    )
    
}

export default Button;