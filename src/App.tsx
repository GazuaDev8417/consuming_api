import { BrowserRouter } from "react-router-dom"
import { createGlobalStyle } from "styled-components"
import Router from "./routes/Router"


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }  

  body{
    background-color: #08001a;
    color: whitesmoke;
  }
`

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Router/>
    </BrowserRouter>
  )
}

export default App
