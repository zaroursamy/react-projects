import React, { Component } from "react";

class MyRef2 extends Component {


    constructor(props){

        super(props)
        
        this.state = {
            value: ''
        }

        this.myInput = React.createRef()
    
    }

    addFocus = () => {
        this.myInput.current.focus()
    }
    
    render(){

        return (
            <div>
                <input ref={this.myInput} type="text" onChange={this.updateValue} />
            </div>
        )
    }
}


export default MyRef2