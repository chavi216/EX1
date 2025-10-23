import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Item1 from './Components/ComponentA'
import Item2 from './Components/ComponentB'
import Item3 from './Components/ComponentC'

const username = prompt("מה שמך?") || "משתמש";

function App() {

  return (
    <div className="container">
      <h1>שלום, {username}!</h1>
      <Item1 />
      <Item2 />
      <Item3 />
    </div>
  );
}

export default App