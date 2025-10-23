import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import ComponentA from './Components/ComponentA'
import ComponentB from './Components/ComponentB'
import ComponentC from './Components/ComponentC'

const username = prompt("מה שמך?") || "משתמש";

function App() {

  return (
    <div className="container">
      <h1>שלום, {username}!</h1>
      <ComponentA />
      <ComponentB />
      <ComponentC />
    </div>
  );
}

export default App