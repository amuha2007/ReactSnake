import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Button from './components/Button/Button';
import Board from './components/Board/Board';
import Settings from './components/Settings/settings';
import SettingsItem from './components/settingsItem/settingsItem';
import { useRef } from 'react';

function App() {

  const [size, setSize]=useState(15);
  const [start, setStart]=useState(false);
  const [score,setScore]=useState(0);
  let [settings, setSettings]=useState(['15','300','#3de03a',"#3de03a","#ffe600"]);
  

  
    useEffect(()=>{
      settings=[];
      document.querySelectorAll('.settingsItem').forEach(function(elem){
        settings.push(elem.children[1].value);
        
      },[])

    document.querySelectorAll('.settingsItem').forEach(function(elem){
      //тут проблема
      elem.children[1].addEventListener('change', function(event){
        event.preventDefault()

        if(elem.children[0].innerHTML==='Ширина доски:'){
          settings[0]=this.value;
          
          
          setSettings(settings);
        }else if(elem.children[0].innerHTML==='Начальная скорость:'){
          settings[1]=this.value;
          
          setSettings(settings);
        }else if(elem.children[0].innerHTML==='Цвет границы доски:'){
          settings[2]=this.value;
          
          setSettings(settings);
        }else if(elem.children[0].innerHTML==='Цвет змейки:'){
          settings[3]=this.value;
          
          setSettings(settings);
        }else if(elem.children[0].innerHTML==='Цвет еды:'){
          settings[4]=this.value;
          
          setSettings(settings);
        }
        
      })
    })
    
  },[settings])

  

  let changeStart=()=>{
    if(start===true){
      
      setStart(false)
      
    }else{
      setStart(true)
      setScore(0);
    }
    
  }

  
  
  return (
    <div className="App">
      
        <div className='settingsContainer'>
          <h1 className='resultH1'>Настройки игры :</h1>
          <Settings settings={{start}}/>
          <Button start={[start,changeStart]} type={'startButton'}/>
        </div>
        <div className='boardContainer'>
          <h1 className='resultH1'>{'Рeзультат :'+ ' '+score}</h1>
          <Board setScore={[score,setScore]} start={[start,setStart]} size={[size,setSize]} settings={settings}/>
        </div>
    </div>
  );
  
}
  
export default App;
