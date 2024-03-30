
import React, { Component } from 'react'
import './App.css'
import MyRef from './components/MyRef'
import MyRef2 from './components/MyRef2'
import MyRef3 from './components/MyRef3'

class App extends Component {
  
  constructor(props){
    super(props)
    
    this.ref2 = React.createRef()
    this.ref3 = React.createRef()
  }
  
  handleClick = () => {
    this.ref2.current.addFocus()
  }

  addFocusOnRef3 = () => {
    console.log(this.ref3.current)

    this.ref3.current.focus()
  }
  
  render(){

    return (
      <>
      {/* <MyRef></MyRef> */}
      {/* <MyRef2 ref={this.ref2}></MyRef2> */}
      <MyRef3 ref={this.ref3}></MyRef3>
      <button onClick={this.addFocusOnRef3}>Add focus</button>
      </>
      )
    }
    
  }
  
  export default App
  