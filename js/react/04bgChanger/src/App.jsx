import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <Button text="Lavender" color="lavender" onClick={() => setColor("lavender")}/>
          <Button text="Red" color="red" onClick={() => setColor("red")}/>
          <Button text="Green" color="green" onClick={() => setColor("green")}/>
          <Button text="Blue" color="blue" onClick={() => setColor("blue")}/>
          <Button text="Orange" color="orange" onClick={() => setColor("orange")}/>
          <Button text="Pink" color="pink" onClick={() => setColor("pink")}/>
        </div>
      </div>
    </div>
  )
}

function Button({text, onClick, color}) {
  return(
    <button
          onClick={onClick}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: color}}
          >{text}</button>
  );
}

export default App
