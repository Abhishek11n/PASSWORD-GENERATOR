import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import {LC,NC,SC,UC} from './data/PassChar'

function App() {
  let [Uppercase,setUppercase]=useState(false)
  let [Lowercase,setLowercase]=useState(false)
  let [Number,setNumber]=useState(false)
  let [Symbols,setSymbols]=useState(false)
  let [passwordlen,setpasswordlen]=useState(10)
  let [show,setshow]=useState('')

let createPassword=()=>{
  let finalpass=''
  let charSet=''
if (Uppercase|| Lowercase || Number ||Symbols) {
   if (Uppercase)charSet+=UC;
   if (Lowercase) charSet+=LC;
   if (Number) charSet+=NC;
   if (Symbols) charSet+=SC;
   for(let i=0;i<passwordlen;i++){
    finalpass+=charSet.charAt(Math.floor(Math.random()*charSet.length))

   }
   setshow(finalpass)
   
   
}
else{
  alert("Please select one checkbox")
}
}
  return (
    <>
      <div className="passwordBox">
        <h2>PASSWORD GENERATOR</h2>

        <div className="passwordboxin">
          <input type="text" value={show} readOnly/>
          <button>Copy</button>
        </div>
        <div className="passlength">
          <label>Password Length</label>
          <input type="number" max={20} min ={10} value={passwordlen} onChange={(event)=>setpasswordlen(event.target.value)}/>

        </div>
        <div className="passlength">
          <label>Including Uppercase Letters</label>
          <input type="checkbox" checked={Uppercase} onChange={()=>setUppercase(!Uppercase)}/>

        </div>
        <div className="passlength">
          <label>Including Lowercase Letters</label>
          <input type="checkbox" checked={Lowercase} onChange={()=>setLowercase(!Lowercase)}/>

        </div>
        <div className="passlength">
          <label>Including Number</label>
          <input type="checkbox" checked={Number} onChange={()=>setNumber(!Number)}/>

        </div>
        <div className="passlength">
          <label>Including Symbols</label>
          <input type="checkbox" checked={Symbols} onChange={()=>setSymbols(!Symbols)}/>

        </div>
        <button className="btn" onClick={createPassword}>Generate Password</button>
      </div>
    </>
  );
}

export default App;
