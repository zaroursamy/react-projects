import './App.css'
// import CustomBtn from './components/CustomBtn'
// import Form from './components/Form'
import Result from './components/Result'

import { Button, Container } from "react-bootstrap";

function App() {x

  const sayHello = () => alert("Hello world");

  return (
    <Container>
      <Result alertMe={sayHello}></Result>
    </Container>
  )
}

export default App
