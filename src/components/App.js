import React, { useState } from "react";
import '../styles/App.css';
import Welcome from './Welcome';

const App = () => {
  const [name, setName] = useState("Ratnesh")
  return (
    <Welcome name={name} />
  )
}


export default App;
