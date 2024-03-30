import React, { Component } from "react";

class MyRef extends Component {


    constructor(props){

        super(props)
        
        this.state = {
            value: ''
        }

        this.myTitle = React.createRef()

        this.myInput = React.createRef()
        console.log(this.myInput.current)
        
    }
    

    updateValue = (e) => {

        this.setState({
            value: e.target.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        this.myTitle.current.style.color = "red"
    }

    componentDidMount() {
        this.myInput.current.focus()
    }

    render(){

        return (
            <div>
                <h1 ref={this.myTitle}>Valeur: {this.state.value}</h1>
                <input ref={this.myInput} type="text" onChange={this.updateValue} />
                <button onClick={() => console.log(this.myInput.current.value)}>Log</button>
            </div>
        )
    }
}


export default MyRef