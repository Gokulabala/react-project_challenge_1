import AddColor from "./Components/AddColor";
import Box from "./Components/Box";
import ToggleColor from "./Components/ToggleColor";
import { useState } from "react";


function App() {
  
  const[color, setColor] = useState('')
  const [hexCode, setHexCode] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  

  return (
    <div>
      <Box
      color = {color}
      hexCode = {hexCode}
      isDarkText = {isDarkText}
      />
      <AddColor
      color = {color}
      setColor = {setColor}      
      setHexCode = {setHexCode}
      />
      <ToggleColor
        isDarkText = {isDarkText}
        setIsDarkText = {setIsDarkText}
      />
    </div>
  );
}

export default App;
