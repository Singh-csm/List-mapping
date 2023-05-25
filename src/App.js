import React from 'react';
import "./app.css";
function Item({ name, isPacked }) {
  return (
    <li className="main" style={{backgroundColor:"mediumseagreen"}}>
      {name} {isPacked && '✔'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section className='main' style={{backgroundColor:"ThreeDLightShadow"}}>
      <h1 className='main'>Sally Ride's Packing List</h1>
      <ul className='main' style={{backgroundColor:"darkslateblue"}}>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={true} 
          name="Photo of T" 
        />
      </ul>
    </section>
  );
}
