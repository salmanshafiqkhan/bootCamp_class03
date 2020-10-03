import React from 'react';
import './App.css';
import Restaurant from './Restaurant.js';

function App() {
  return (
    <div className = "App">
      
      <h1>Deal 01</h1>
      <Restaurant dishName = "Chicken Mandi" dessert = "Kanafa"/>
      <h1>Deal 02</h1>
      <Restaurant dishName = "Mix Grill" dessert = "Umm Ali"/>
      <h1>Deal 03</h1>
      <Restaurant dishName = "Chicken Mayo Roll" dessert = "Cheese Cake"/>
    </div>
  )
}

export default App;
