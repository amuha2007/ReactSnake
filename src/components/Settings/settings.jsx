import React, { useEffect } from "react";
import SettingsItem from "../settingsItem/settingsItem";
import { useState } from "react";
const Settings = (props) =>{

    

    const [clases,setCalsses]=useState('settings');

    console.log(props.settings);
    useEffect(()=>{
        props.settings.start===true?
        setCalsses('none')
    :
        setCalsses('settings')
    },[props.settings.start])
    

    return(
        
        
        <div className={clases}>
            <SettingsItem header={'Ширина доски:'} value={[15,20,35]}/>
            <SettingsItem header={'Начальная скорость:'} value={[300,400,500]}/>
            <SettingsItem header={'Цвет границы доски:'} value={['#3de03a','#b914f5','#f52222']}/>
            <SettingsItem header={'Цвет змейки:'} value={['#3de03a','#b914f5','#f52222']}/>
            <SettingsItem header={'Цвет еды:'} value={['#ffe600','#b914f5','#f52222']}/>
            
        </div>
        //:null
    )
}

export default Settings;