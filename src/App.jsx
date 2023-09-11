import { useReducer, useState } from 'react'
import './App.css'

const initialState = 0;

const reducer = (state,action) => {

  switch(action.type) {
    case "SUM":
      return state + action.payload
    default:
      console.log("default");
  }
}


function App() {

  const [value, setValue] = useState("");
  const [previousValue,setPreviousValue] = useState("");
  const [operator,setOperator] = useState("");

  const [number,dispatch] = useReducer(reducer,initialState);

  const handleOperator = (event) => {
    setPreviousValue(value);
    setOperator(event.target.textContent);
      dispatch({type:"SUM",payload:parseInt(value)});
      setValue("");
  }


  return (



      <div className='flex flex-col w-full justify-center h-screen items-center mt-12'>
        <div className='bg-gray-600 w-[463px] h-16 text-white flex items-end flex-col pt-4 px-2 pb-16 font-mono'>
          <div className='text-xs mr-1'>{previousValue}<span> {operator}</span></div>
          <div className='text-2xl mr-1'>{number !=0 ? number : value }</div>
          </div>
        <div className='grid grid-cols-4 gap-x-1 mt-1'>
          <button className='bg-gray-300 px-12 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={handleOperator}>+</button>
          <button className='bg-gray-300 px-12 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={handleOperator}>-</button>
          <button className='bg-gray-300 px-12 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={handleOperator}>/</button>
          <button className='bg-gray-300 px-12 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={handleOperator}>*</button>
        </div>
          <div className='grid grid-cols-3 gap-x-4 gap-y-1 mt-2'>
          <button className='bg-gray-300 px-16 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={e => setValue(value + e.target.textContent)}>1</button>
          <button className='bg-gray-300 px-16 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={e => setValue(value + e.target.textContent)}>2</button>
          <button className='bg-gray-300 px-16 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={e => setValue(value + e.target.textContent)}>3</button>
          <button className='bg-gray-300 px-16 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={e => setValue(value + e.target.textContent)}>4</button>
          <button className='bg-gray-300 px-16 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={e => setValue(value + e.target.textContent)}>5</button>
          <button className='bg-gray-300 px-16 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={e => setValue(value + e.target.textContent)}>6</button>
          <button className='bg-gray-300 px-16 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={e => setValue(value + e.target.textContent)}>7</button>
          <button className='bg-gray-300 px-16 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={e => setValue(value + e.target.textContent)}>8</button>
          <button className='bg-gray-300 px-16 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={e => setValue(value + e.target.textContent)}>9</button>
          <button className='bg-gray-300 px-16 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={e => setValue(value + e.target.textContent)}>.</button>
          <button className='bg-gray-300 px-16 py-4 text-2xl font-bold hover:bg-gray-500 duration-200' onClick={e => setValue(value + e.target.textContent)}>0</button>
          <button className='bg-red-400 px-16 py-4 text-2xl font-bold hover:bg-red-500 duration-200'>=</button>
          </div>
      </div>
  

  )
}

export default App
