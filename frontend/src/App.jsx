import React from "react"
import {GameProvider} from "./contexts/GameContext"
import Loja from "./components/Loja"


function App() {
  return (
    <>
      <h1 className="text-center text-[40px] font-extrabold text-[#ed145b] m-8">
        FiapSteam
      </h1>
      <GameProvider>
        <Loja/>
      </GameProvider>
   
    </>
  )
}

export default App
