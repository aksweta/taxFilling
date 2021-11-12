import React, { useEffect, useState } from 'react';
import stateTax from './reference/stateTax.json';
import './App.css';

function App() {

  const [firstinput, setFInput] = useState("");
  const [lastinput, setLInput] = useState("");
  const [add1input, setA1Input] = useState("");
  const [add2input, setA2Input] = useState("");
  const [country, setCountry] = useState("");
  const [totaltax, setTotaltax] = useState();
  const [preium,setPreium] = useState("");

 

  function Onclickreset(){
       setFInput("");
       setLInput("");
       setA1Input("");
       setA2Input("");
       setPreium("");
       setTotaltax("");
       setCountry("");
  }

  function getTaxinfo(e){
     
    //  stateTax.map((val) => {
    //    if(e.target.value === val.code){
    //      console.log(val.taxes);
    //    }
      
    //   })
      
    
    setCountry(e.target.value)

  }


  useEffect(() => {

    stateTax.map((val) => {
         if(country === val.code){
         
          let a = 0;
          val.taxes.forEach((tax) => a += parseInt((Object.values(tax).toString()*preium)/100))
          console.log(preium);
          console.log(a);
          
          const total = parseInt(preium) + a;
          
          setTotaltax(total);
        
         }
        
        })

  }, [country])


  return (
    <div>
      <div className="header">
        <h1>Welcome to the US tax Calulator</h1>
      </div>
      <div className="button">
        <button type="button">
          <a href="#demo-modal">Calculate My Tax</a>
        </button>
      </div>

      <div id="demo-modal" className="modal">
        <div className="modal__content">
          <div className="modal-body">
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">First Name</label>
            </div>
            <div className="col-75">
              <input type="text" id="fname" name="firstname" value={firstinput}  onChange={(e) =>  setFInput(e.target.value)}/>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Last Name</label>
            </div>
            <div className="col-75">
              <input type="text" id="lname" name="lastname" value={lastinput} onChange={(e) =>  setLInput(e.target.value)}/>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="premium">Premium*</label>
            </div>
            <div className="col-75">
              <input type="number" id="premium" name="premium" value={preium} onChange={(e) =>  setPreium(e.target.value)} required/>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="addline1">Address Line 1*</label>
            </div>
            <div className="col-75">
              <input type="text" id="addline1" name="addline1" value={add1input} placeholder="Line 1" onChange={(e) =>  setA1Input(e.target.value)} required/>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="addline2">Address Line 2</label>
            </div>
            <div className="col-75">
              <input type="text" id="addline2" name="addline2" value={add2input} placeholder="Line 2" onChange={(e) =>  setA2Input(e.target.value)} />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="country">State*</label>
            </div>
            <div className="col-75">
              <select id="country" name="country" value={country} onChange={getTaxinfo} placeholder="Select state" required>
                {stateTax.map((val) => (
                  <option value={val.code} key={val.code}>
                    {val.state}
                  </option>
                ))}
              </select>
              </div>
          </div>

    

              {totaltax && (<div className="row">
            <div className="col-25">
              <label htmlFor="totaltax">Total Tax</label>
              </div>
              <div className="col-75">
              <label htmlFor="printtax">{totaltax}</label> 
              </div>
              </div>)}


           
          </div>

          <a href="#" onClick={Onclickreset} className="modal__close">
          &times;
           </a>
          <div className="modal-footer">
            <button type="reset" name="reset" onClick={Onclickreset}>Reset</button>
            <button type="submit" name="next" value="Next" disabled={preium && add1input && country ? false : true}>Next</button>
          </div>
          
        </div>
        
      </div>
    </div>
  );
    }

export default App;
