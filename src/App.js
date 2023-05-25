import React from 'react';
import "./app.css"
function App() {
 
  const list = ["milk","curd","vegetables","cheese","fruits"]

  return (
<div>
<h1>{"List of materials to be shoped"}</h1>
<ul style={{fontWeight:"bold"}}>
      {
        list.map(item => <li style={{border:"2px solid red", padding:"12px",borderBlockEndColor:"bisque"}}>{item}</li>)
      }
    </ul>
</div>

  );
}

export default App;