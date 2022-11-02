import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import cl from './styleBoard.css';
import Square from "../Square/Square.jsx";


const Board =(props)=>{
    
    let boardStyles={
        
        width: 'fit-content',
        height: 'fit-content',
        boxShadow: `0px 0px 5px 1px ${props.settings[2]}`,
        borderRadius: '10px',
        padding: '3px',
        
    }

    let start=[props.start[0],props.start[1]];
    
    const [BOARD_SIZE,setBOARD_SIZE]=useState(Number(15));
    const [SPEED, setSpeed] = useState(300);
    
    const [crash,setCrash]=useState(false);

    useEffect(()=>{

        setBOARD_SIZE(Number(props.settings[0]))
        setSpeed(Number(props.settings[1]))

        if(props.start[0]==false){
            
            setSnake([[1,1],[2,1]]);
        }
        
    },[props.start[0],props.settings[0]])
    
    
    useEffect(()=>{
        generateFood();
    },[BOARD_SIZE])
    
    

    const DEFAULT_CELLS_VALUE = Array(BOARD_SIZE).fill(Array(BOARD_SIZE).fill(0));
    
    const AVALIBLE_MOVES=['ArrowDown','ArrowUp','ArrowRight','ArrowLeft'];
    const [snake,setSnake]=useState([[1,1],[2,1]]);
    const [food, setFood] =useState([Math.floor(Math.random()*BOARD_SIZE),Math.floor(Math.random()*BOARD_SIZE)]);
    const [direction,setDirection] = useState(AVALIBLE_MOVES[0]);
    
    
    

    const checkAvailableSlot = position =>{
        switch (true) {
            case position >= BOARD_SIZE:
                return 0
            case position < 0:
                return BOARD_SIZE - 1
            default:
                return position
        }
    }

    
    
    

    const handleKeyDown =(event)=>{
        
        console.log('hendleKeyDown');
        
        event.preventDefault();
        
        const index = AVALIBLE_MOVES.indexOf(event.key);
        if(index>-1){
            console.log(AVALIBLE_MOVES[index], index);
            console.log(direction);
            if(AVALIBLE_MOVES[index]=='ArrowUp'&&direction=='ArrowDown'){

            }else if(AVALIBLE_MOVES[index]=='ArrowDown' && direction=='ArrowUp'){

            }else if(AVALIBLE_MOVES[index]=='ArrowLeft' && direction=='ArrowRight'){

            }else if(AVALIBLE_MOVES[index]=='ArrowRight' && direction=='ArrowLeft'){
                
            }else{
                setDirection(AVALIBLE_MOVES[index]);
            }
            
        }
    
    }

    useEffect(()=>{
        setDirection(AVALIBLE_MOVES[0]);
        setCrash(false)
    },[start[0]])

    
    
    useEffect(()=>{
        if(start[0]===true){
        const interval = gameLoop()
        document.addEventListener('keydown', handleKeyDown)
        
            return ()=>{
                document.removeEventListener('keydown', handleKeyDown)
                clearInterval(interval)
                
            }
        }
    },[snake, start])
    
    const generateFood = () =>{
        let newFood
            do{
                newFood=[
                        Math.floor(Math.random()*BOARD_SIZE),
                        Math.floor(Math.random()*BOARD_SIZE)
                        ]
            } while (snake.some(elem=>elem[0]===newFood[0]&& elem[1]===newFood[1]))
            
            setFood(newFood);
    }

    const gameLoop=()=>{
        
        const timer = setTimeout(() => {
            if(!crash){
            const newSnake = snake;
            
            let move = [];
            
            // eslint-disable-next-line default-case
            switch(direction){
                case AVALIBLE_MOVES[0]:
                    move = [1,0];
                    break;
                case AVALIBLE_MOVES[1]:
                    move = [-1,0]
                    break;
                case AVALIBLE_MOVES[2]:
                    move=[0,1]
                    break;
                case AVALIBLE_MOVES[3]:
                    move=[0,-1]
                    break;
                
            }
        
    
            const head = [
                checkAvailableSlot(newSnake[newSnake.length-1][0]+move[0]),
                checkAvailableSlot(newSnake[newSnake.length-1][1]+move[1])
            ];
            // console.log(snake.length);
            
            newSnake.push(head);
            let spliceIndex=1;

            if(head[0]==food[0] && head[1]===food[1]){
                spliceIndex=0;
                generateFood();
                props.setScore[1](props.setScore[0]+1)
                if(SPEED>=100){
                    setSpeed(SPEED-10);
                    
                }else if(SPEED<100){
                    setSpeed(SPEED-5);
                    
                }else if(SPEED<50){
                    setSpeed(SPEED-2);
                }
            }
            
            setSnake(newSnake.slice(spliceIndex));
        
            //проверка на удар об саму себя змеи
            for(let i = 0 ;i<newSnake.length-1;i++){
                
                if(head[0]==newSnake[i][0]&&head[1]==newSnake[i][1]){
                    setCrash(true)
                    
                }
            }
        }else{

        }

        }, SPEED);

            return timer
            
    }

    return(
        
            <div style={boardStyles} className='Board'>
                
                {DEFAULT_CELLS_VALUE.map((row,indexR)=>(
                    <div key={indexR} className='row'>
                        {row.map((square,indexC)=>{
                            let type = snake.some(elem => elem[0]=== indexR && elem[1]===indexC) && 'snake'
                            if(type!== 'snake'){
                                type = (food[0] === indexR && food[1] === indexC) && 'food';  
                        }

                            return(
                                <Square key={indexC} type={type} settings={props.settings}/>
                            )
                            
                        })}
                    </div>    
                ))}
                    
                
            </div>
    )
}

export default Board