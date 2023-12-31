import { useReducer, useState } from 'react'
import './App.css'

const initialState = {
  stateValue : 0,
  stateControl : true,
};

const reducer = (state,action) => {
    switch(action.type) {
      case "SUM":
        state.stateValue = state.stateValue + ( action.payloadOne + action.payloadTwo);
        return state;
      case "SUBSTRACT":
        state.stateValue = state.stateValue + (action.payloadOne - action.payloadTwo);
        return state
      case "MULTIPLE":
        if (state.stateValue === 0 && state.stateControl) {
          state.stateValue = (action.payloadOne * action.payloadTwo);
          state.stateControl = false;
          return state
        }
        else {
          state.stateValue = state.stateValue * (action.payloadOne * action.payloadTwo);
          return state
        }
      case "DIVIDE":
        if (state.stateValue === 0 && state.stateControl) {
          state.stateValue = (action.payloadOne * (1/action.payloadTwo));
          state.stateControl = false;
          return state
        }
        else {
          if (action.payloadOne === 1) {
            state.stateValue = state.stateValue * (1/action.payloadTwo);
            return state
          }
          else {
            state.stateValue = state.stateValue * 1/(action.payloadOne * (1/action.payloadTwo));
            return state
          }
          
        }
      default:
          return console.log("gello");
    }
}


function App() {
  const [currentValue, setCurrentValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");
  const [operator, setOperator] = useState("");
  
  const handleClick = (event) => {
      setPreviousValue(currentValue);
      setOperator(event.target.textContent);
      setCurrentValue("");
  }

  const handleQual = () => {
      console.log(currentValue,previousValue,operator);
        if (operator === "+") {
          dispatch({type:"SUM",payloadOne:parseInt(previousValue),payloadTwo:parseInt(currentValue)});
          setPreviousValue("");
          setCurrentValue(0);
        }
        else if (operator === "-") {
          dispatch({type:"SUBSTRACT",payloadOne:parseInt(previousValue),payloadTwo:parseInt(currentValue)});
          setPreviousValue(0);
          setCurrentValue(0);
        }
        else if (operator === "*") {
          dispatch({type:"MULTIPLE",payloadOne:parseInt(previousValue),payloadTwo:parseInt(currentValue)});
          setPreviousValue(1);
          setCurrentValue(1);
        }
        else if (operator === "/") {
          dispatch({type:"DIVIDE",payloadOne:parseInt(previousValue),payloadTwo:parseInt(currentValue)});
          setPreviousValue(1);
          setCurrentValue(1);
        }
  }
  
  const [result,dispatch] = useReducer(reducer,initialState);
  
  return (



      <div className='flex flex-col w-full justify-center h-screen items-center mt-12'>
        <div className='bg-gray-600 w-[463px] h-16 text-white flex items-end flex-col pt-4 px-2 pb-16 font-mono'>
          <div className='text-xs mr-1'>{previousValue ? previousValue : "0"}<span> {operator ? operator : ""}</span></div>
          <div className='text-2xl mr-1'>{result.stateValue !== 0 ? result.stateValue : currentValue}</div>
          </div>
        <div className='grid grid-cols-4 gap-x-1 mt-1'>
          <button className='bg-gray-300 px-12 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={handleClick}>+</button>
          <button className='bg-gray-300 px-12 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={handleClick}>-</button>
          <button className='bg-gray-300 px-12 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={handleClick}>/</button>
          <button className='bg-gray-300 px-12 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={handleClick}>*</button>
        </div>
          <div className='grid grid-cols-3 gap-x-4 gap-y-1 mt-2'>
          <button className='bg-gray-300 px-16 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={(e) => {setCurrentValue(currentValue + e.target.textContent)}}>1</button>
          <button className='bg-gray-300 px-16 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={(e) => {setCurrentValue(currentValue + e.target.textContent)}}>2</button>
          <button className='bg-gray-300 px-16 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={(e) => {setCurrentValue(currentValue + e.target.textContent)}}>3</button>
          <button className='bg-gray-300 px-16 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={(e) => {setCurrentValue(currentValue + e.target.textContent)}}>4</button>
          <button className='bg-gray-300 px-16 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={(e) => {setCurrentValue(currentValue + e.target.textContent)}}>5</button>
          <button className='bg-gray-300 px-16 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={(e) => {setCurrentValue(currentValue + e.target.textContent)}}>6</button>
          <button className='bg-gray-300 px-16 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={(e) => {setCurrentValue(currentValue + e.target.textContent)}}>7</button>
          <button className='bg-gray-300 px-16 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={(e) => {setCurrentValue(currentValue + e.target.textContent)}}>8</button>
          <button className='bg-gray-300 px-16 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={(e) => {setCurrentValue(currentValue + e.target.textContent)}}>9</button>
          <button className='bg-gray-300 px-16 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={(e) => {setCurrentValue(currentValue + e.target.textContent)}}>.</button>
          <button className='bg-gray-300 px-16 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={(e) => {setCurrentValue(currentValue + e.target.textContent)}}>0</button>
          <button className='bg-red-400 px-16 py-4 text-2xl font-bold hover:bg-red-500 duration-200'   onClick={handleQual}>=</button>
          </div>
      </div>
  

  )
}

export default App
