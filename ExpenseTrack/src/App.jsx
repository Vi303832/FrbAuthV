import { useState } from 'react'
import { Routes, Route } from "react-router"
import { Auth } from "./Auth/index.jsx"
import { Exp } from "./Auth/ExpenseT.jsx"

function App() {


  return (
    <>
      <div>
        <Routes>
          <Route path="/" exact element={<Auth />} />
          <Route path="/expense-tracker" exact element={< Exp />} />


        </Routes>

      </div>
    </>
  )
}

export default App
