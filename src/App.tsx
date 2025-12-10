// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Greeting from './components/Greeting'
import Employee from './components/Employee'
import Counter from './components/Count'

//2 lines updated - 2nd line changed
//3rd line changed

function App() {
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>Vite + React</h1> */}
      <Greeting/>
      <Employee name="emp1" id={101} />
      <Employee name="emp2" id={102} />
      <Counter></Counter>
      
      
    </>
  )
}

export default App
