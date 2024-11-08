import { useState, useEffect } from "react"

export default function FunctionClock({ color = 'red'}) {
  const [date, setDate] = useState(new Date())
  
  useEffect(() => {
    const timerId = setInterval(()=>{
      setDate(new Date())
    },1000)
    
    return () =>{
      clearInterval(timerId);
      //will unmount
      // clean up
    }
  },[])

  return(
    <h3 style={{ color }}>
      Function: { date.toLocaleTimeString() }</h3>
  )
}