import React from "react";
import { useState } from "react";

import { useRef } from "react";
import { useEffect } from "react";

const SettingsItem = (props) => {
    
    console.log(props);
    const inputRef=useRef(null);

    return(
        <div className="settingsItem text">
            <p>{props.header}</p>
            
            {props.header.indexOf('Цвет')>=0 && props.header !== 'Цвет еды:'?

                <select className='select text'  ref={inputRef} style={{backgroundColor:``}}>
                    
                    <option className='text' value={props.value[0]} style={{backgroundColor:`${props.value[0]}`}}>Green</option>
                    <option className='text' value={props.value[1]} style={{backgroundColor:`${props.value[1]}`}}>Purple</option>
                    <option className='text' value={props.value[2]} style={{backgroundColor:`${props.value[2]}`}}>Red</option>
                    
                </select>
                : 
                props.header.indexOf('Цвет')>=0 && props.header === 'Цвет еды:'?
                <select className='select text'  ref={inputRef} style={{backgroundColor:``}}>

                    <option className='text' value={props.value[0]} style={{backgroundColor:`${props.value[0]}`}}>Yellow</option>
                    <option className='text' value={props.value[1]} style={{backgroundColor:`${props.value[1]}`}}>Purple</option>
                    <option className='text' value={props.value[2]} style={{backgroundColor:`${props.value[2]}`}}>Red</option>

                </select>
                :
                <select className='select text'  ref={inputRef} style={{backgroundColor:`${props.value[0]}`}}>

                    <option className='text' value={props.value[0]}>{props.value[0]}</option>
                    <option className='text' value={props.value[1]}>{props.value[1]}</option>
                    <option className='text' value={props.value[2]}>{props.value[2]}</option>

                </select>
                }
            
        </div>
    )

};

export default SettingsItem;