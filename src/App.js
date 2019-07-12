import React from 'react';
import './App.css';
import Navbar from "./navbar";
const menuItem = {link: '#', title: 'About us', isActive: true}
const menuItem2 = {link: '#', title: 'Contact', isActive: false}

function App() {
  return (
    <div className="App">
      <Navbar item={menuItem}/>
      <Navbar item={menuItem2}/>
     
 
    </div>
  );
}

export default App;
