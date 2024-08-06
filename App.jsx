import { useState } from 'react'

import './App.css'

function App() {
  const [height,setHeight] = useState("");
  const [weight , setWeight] = useState("");
  const [bmi ,setBmi] = useState("");
  const [bmiStatus , setBmistatus] =useState("");
  

  const calculateBmi = ()=>{
    if(height && weight){
      const heightInMeters = height / 100;
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if(bmiValue <18.5){
        setBmistatus("UnderWeight");
      }else if(bmiValue >= 18.5 && bmiValue <24.9){
        setBmistatus("Normal Weight");
      }else if(bmiStatus >= 25 && bmiValue <29.9){
        setBmistatus("Over Weight");
      }else{
        setBmistatus("romba konda irukadaa");
      }

    }else{
      setBmi(null);
      setBmistatus("");
    }

  }
    

  return (
    <>
      
        <div className="bmi-Calculator">
          <div className="box"></div>
          <div className="data"></div>
          <h1>BMI CALCULATOR</h1>
          <br></br>
          <div className="input-Container">
            <label htmlFor="Height">Height</label>
            <input type="text" value= {height}id='Height'onChange={(e)=>setHeight(e.target.value)} />
          </div>
          <br></br>
          <div className="input-Container">
            <label htmlFor="Weight">Weight</label>
            <input type="text" value = {weight}id='Weight'onChange={(e)=>setWeight(e.target.value)} />
            <br></br><br></br>
            <button onClick={calculateBmi}>Calcultor BMI</button>
            <div className="Result">
              <p>Your BMI is :{bmi}</p>
              <p>Status is : {bmiStatus}</p>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default App
