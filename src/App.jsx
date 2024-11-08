import React, { useState } from 'react'
import ClassClock from './ClassClock'
import FunctionClock from './FunctionClock'

function App() {
  const [displayColor, setDisplayColor] = useState('black');
  const colors = ['black', 'red', 'blue', 'green']

  const changeDisplayColor = (color) => {
    setDisplayColor(color);
  }
  
  return (
    <>
      <div>
        <h1>오늘의 샘플 앱</h1>
      </div>
      <div>
        <div>
          {colors.map(color => <button onClick={() => changeDisplayColor(color)}>{color}</button>)}
        </div>
        <ClassClock color={displayColor}/> 
        <FunctionClock />
      </div>
    </>
  )
}

export default App
