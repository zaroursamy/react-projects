import './App.css'
import Vegeta from './Vegeta'
import Goku from './Goku'
import { Component } from 'react'
import FighterError from './FighterError'
import {Button, Image} from "react-bootstrap";
import refresh from "./assets/refresh.png"

class App extends Component {
  
  state = {
    vegetaHealth: 100,
    gokuHealth: 100,
  }

  decrementHealh = (fighterName, hitValue) => {

    if (fighterName === "Vegeta"){
      this.setState(prevState => {
        return {
          gokuHealth: prevState.gokuHealth - hitValue
        }
      })
    }
    else{
      this.setState(prevState => {
        return {
          vegetaHealth: prevState.vegetaHealth - hitValue
        }
      })
    }


  }


  
  render() {
    return (
        <div className='container text-center'>
          <h1>Dragon Ball Z</h1>
          <Image className='refresh' onClick={() => window.location.reload()} src={refresh} />
          <hr/>
          <div className='row'>
            <FighterError>
              <Vegeta decrementHealth={this.decrementHealh} health={this.state.vegetaHealth} name='Vegeta'/>
            </FighterError>

            <FighterError>
              <Goku decrementHealth={this.decrementHealh} health={this.state.gokuHealth} name='Goku'/>
            </FighterError>

          </div>
        </div>
    )
  }
}

export default App
