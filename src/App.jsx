import { useState } from 'react'


function App() {
let [x, setX] = useState();
let [x1, setX1] = useState();
let [x2, setX2] = useState();
let [x3, setX3] = useState();
let [x4, setX4] = useState();
let [x5, setX5] = useState();
let [x6, setX6] = useState();
let [x7, setX7] = useState();
let [x8, setX8] = useState();
let [frnde, setFrnde] = useState(false);
let [edit, setEdit] = useState(true);
let [num, setNum] = useState(0);
let [alertShown, setAlertShown] = useState(false);

const change = (event) => {
  if(edit == true && frnde == false){
  if(x == "X"){
    setX();
  }
  else{
  setX("X");
  }
}
else if(frnde == true && edit == false){
  if (num == 0 || num == 2 || num == 4 || num == 6 || num == 8 || num == 10 || num == 12 || num == 14 || num == 16){
    setX("X")
  }
  else{
    setX("O")
  }
  setNum(num + 1)
}
}
const change1 = (event) => {
  if(edit == true && frnde == false){
  if(x1 == "X"){
    setX1();
  }
  else{
  setX1("X");
  }
}
  else if(frnde == true && edit == false){
    if (num == 0 || num == 2 || num == 4 || num == 6 || num == 8 || num == 10 || num == 12 || num == 14 || num == 16){
      setX1("X")
    }
    else{
      setX1("O")
    }
    setNum(num + 1)
  }
}

const change2 = (event) => {
  if(edit == true && frnde == false){
  if(x2 == "X"){
    setX2();
  }
  else{
  setX2("X");}
  }
  else if(frnde == true && edit == false){
    if (num == 0 || num == 2 || num == 4 || num == 6 || num == 8 || num == 10 || num == 12 || num == 14 || num == 16){
      setX2("X")
    }
    else{
      setX2("O")
    }
    setNum(num + 1)
  }
}
const change3 = (event) => {
  if(edit == true && frnde == false){
  if(x3 == "X"){
    setX3();
  }
  else{
  setX3("X");}
  }
  else if(frnde == true && edit == false){
    if (num == 0 || num == 2 || num == 4 || num == 6 || num == 8 || num == 10 || num == 12 || num == 14 || num == 16){
      setX3("X")
    }
    else{
      setX3("O")
    }
    setNum(num + 1)
  }
}
const change4 = (event) => {
  if(edit == true || frnde == false){
  if(x4 == "X"){
    setX4();
  }
  else{
  setX4("X");}
  }
  else if(frnde == true && edit == false){
    if (num == 0 || num == 2 || num == 4 || num == 6 || num == 8 || num == 10 || num == 12 || num == 14 || num == 16){
      setX4("X")
    }
    else{
      setX4("O")
    }
    setNum(num + 1)
  }
}
const change5 = (event) => {
  if(edit == true || frnde == false){
  if(x5 == "X"){
    setX5();
  }
  else{
  setX5("X");}
  }
  else if(frnde == true && edit == false){
    if (num == 0 || num == 2 || num == 4 || num == 6 || num == 8 || num == 10 || num == 12 || num == 14 || num == 16){
      setX5("X")
    }
    else{
      setX5("O")
    }
    setNum(num + 1)
  }
}
const change6 = (event) => {
  if(edit == true || frnde == false){
  if(x6 == "X"){
    setX6();
  }
  else{
  setX6("X");}
  }
  else if(frnde == true && edit == false){
    if (num == 0 || num == 2 || num == 4 || num == 6 || num == 8 || num == 10 || num == 12 || num == 14 || num == 16){
      setX6("X")
    }
    else{
      setX6("O")
    }
    setNum(num + 1)
  }
}
const change7 = (event) => {
  if(edit == true || frnde == false){
  if(x7 == "X"){
    setX7();
  }
  else{
  setX7("X");
  }
}
else if(frnde == true && edit == false){
    if (num == 0 || num == 2 || num == 4 || num == 6 || num == 8 || num == 10 || num == 12 || num == 14 || num == 16){
      setX7("X")
    }
    else{
      setX7("O")
    }
    setNum(num + 1)
  }
}
const change8 = (event) => {
  if(edit == true || frnde == false){
  if(x8 == "X"){
    setX8();
  }
  else{
  setX8("X");
  }
}
else if(frnde == true && edit == false){
    if (num == 0 || num == 2 || num == 4 || num == 6 || num == 8 || num == 10 || num == 12 || num == 14 || num == 16){
      setX8("X")
    }
    else{
      setX8("O")
    }
    setNum(num + 1)
  }
}
const cnge = (event) => {
  if(x == "O"){
    setX("O");
  }
  else{
  setX("O")}
}
const cnge1 = (event) => {
  if(x1 == "O"){
    setX1("O");
  }
  else{
  setX1("O")}
}
const cnge2 = (event) => {
  if(x2 == "O"){
    setX2("O");
  }
  else{
  setX2("O")}
}
const cnge3 = (event) => {
  if(x3 == "O"){
    setX3("O");
  }
  else{
  setX3("O")}
}
const cnge4 = (event) => {
  if(x4 == "O"){
    setX4("O");
  }
  else{
  setX4("O")}
}
const cnge5 = (event) => {
  if(x5 == "O"){
    setX5("O");
  }
  else{
  setX5("O")}
}
const cnge6 = (event) => {
  if(x6 == "O"){
    setX6("O");
  }
  else{
  setX6("O")}
}
const cnge7 = (event) => {
  if(x7 == "O"){
    setX7("O");
  }
  else{
  setX7("O")}
}
const cnge8 = (event) => {
  if(x8 == "O"){
    setX8("O");
  }
  else{
  setX8("O")}
}
  const friend = () => {
    setFrnde(true);
    setEdit(false);
    setX();
    setX1();
    setX2();
    setX3();
    setX4();
    setX5();
    setX6();
    setX7();
    setX8();
  }
  const edite = () => {
    setFrnde(false);
    setEdit(true);
    setX();
    setX1();
    setX2();
    setX3();
    setX4();
    setX5();
    setX6();
    setX7();
    setX8();
  }
  if(x == "X" && x1 == "X" && x2 == "X"){
    

    setTimeout(function(){
    window.alert("X wins");
    setAlertShown(true);
    setX();
    setX1();
    setX2();
    setX3();
    setX4();
    setX5();
    setX6();
    setX7();
    setX8();
    }, 100);
    
  
  }
  else if(x6 == "X" && x7 == "X" && x8 == "X"){
    setTimeout(function(){
    window.alert("X wins");
    setAlertShown(true);
    setX();
    setX1();
    setX2();
    setX3();
    setX4();
    setX5();
    setX6();
    setX7();
    setX8();
    }, 100);
  }
  else if(x == "X" && x3 == "X" && x6 == "X"){
    setTimeout(function(){
    window.alert("X wins");
    setAlertShown(true);
    setX();
    setX1();
    setX2();
    setX3();
    setX4();
    setX5();
    setX6();
    setX7();
    setX8();
    }, 100);
  }
  else if(x1 == "X" && x4 == "X" && x7 == "X"){
    setTimeout(function(){
    window.alert("X wins");
    setAlertShown(true);
    setX();
    setX1();
    setX2();
    setX3();
    setX4();
    setX5();
    setX6();
    setX7();
    setX8();
    }, 100);
  }
  else if(x2 == "X" && x5 == "X" && x8 == "X"){
    setTimeout(function(){
    window.alert("X wins");
    setAlertShown(true);
    setX();
    setX1();
    setX2();
    setX3();
    setX4();
    setX5();
    setX6();
    setX7();
    setX8();
    }, 100);
  }
  else if(x == "X" && x4 == "X" && x8 == "X"){
    setTimeout(function(){
    window.alert("X wins");
    setAlertShown(true);
    setX();
    setX1();
    setX2();
    setX3();
    setX4();
    setX5();
    setX6();
    setX7();
    setX8();
    }, 100);
  }
  else if(x2 == "X" && x4 == "X" && x6 == "X"){
    setTimeout(function(){
    window.alert("X wins");
    setAlertShown(true);
    setX();
    setX1();
    setX2();
    setX3();
    setX4();
    setX5();
    setX6();
    setX7();
    setX8();
    }, 100);
  }
  else if(x == "O" && x1 == "O" && x2 == "O"){
    setTimeout(function(){
    window.alert("O wins");
    setAlertShown(true);
    setX();
    setX1();
    setX2();
    setX3();
    setX4();
    setX5();
    setX6();
    setX7();
    setX8();
    }, 100);
  }
  else if(x3 == "O" && x4 == "O" && x5 == "O"){
    setTimeout(function(){
    window.alert("O wins");
    setAlertShown(true);
    setX();
    setX1();
    setX2();
    setX3();
    setX4();
    setX5();
    setX6();
    setX7();
    setX8();
    }, 100);
  }
  else if(x6 == "O" && x7 == "O" && x8 == "O"){
    setTimeout(function(){
    window.alert("O wins");
    setAlertShown(true);
    setX();
    setX1();
    setX2();
    setX3();
    setX4();
    setX5();
    setX6();
    setX7();
    setX8();
    }, 100);
  }
  else if(x == "O" && x3 == "O" && x6 == "O"){
    setTimeout(function(){
    window.alert("O wins");
    setAlertShown(true);
    setX();
    setX1();
    setX2();
    setX3();
    setX4();
    setX5();
    setX6();
    setX7();
    setX8();
    }, 100);
  }
  else if(x1 == "O" && x4 == "O" && x7 == "O"){
    setTimeout(function(){
    window.alert("O wins");
    setAlertShown(true);
    setX();
    setX1();
    setX2();
    setX3();
    setX4();
    setX5();
    setX6();
    setX7();
    setX8();
    }, 100);
  }
  else if(x2 == "O" && x5 == "O" && x8 == "O"){
    setTimeout(function(){
    window.alert("O wins");
    setAlertShown(true);
    setX();
    setX1();
    setX2();
    setX3();
    setX4();
    setX5();
    setX6();
    setX7();
    setX8();
    }, 100);
  }
  else if(x == "O" && x4 == "O" && x8 == "O"){
    setTimeout(function(){
    window.alert("O wins");
    setAlertShown(true);
    setX();
    setX1();
    setX2();
    setX3();
    setX4();
    setX5();
    setX6();
    setX7();
    setX8();
    }, 100);
  }
  else if(x2 == "O" && x4 == "O" && x6 == "O"){
    setTimeout(function(){
    window.alert("O wins");
    setAlertShown(true);
    setX();
    setX1();
    setX2();
    setX3();
    setX4();
    setX5();
    setX6();
    setX7();
    setX8();
    }, 100);
  }
  else{
    console.log("no one wins");
  }
return(
  <div className='container'>
    <button onClick={edite} className='edit'>Edit mod</button><button className='AI'>play vs AI</button><button onClick={friend} className='frnd'>play vs friend</button><br></br>
    <button onClick={change} onWheel={cnge} className='b1'>{x}</button>
    <button onClick={change1} onWheel={cnge1} className='b2'>{x1}</button>
    <button onClick={change2} onWheel={cnge2} className='b3'>{x2}</button><br></br>
    <button onClick={change3} onWheel={cnge3} className='b4'>{x3}</button>
    <button onClick={change4} onWheel={cnge4} className='b5'>{x4}</button>
    <button onClick={change5} onWheel={cnge5} className='b6'>{x5}</button><br></br>
    <button onClick={change6} onWheel={cnge6} className='b7'>{x6}</button>
    <button onClick={change7} onWheel={cnge7} className='b8'>{x7}</button>
    <button onClick={change8} onWheel={cnge8} className='b9'>{x8}</button>
    
  </div>
  
)
}


export default App
