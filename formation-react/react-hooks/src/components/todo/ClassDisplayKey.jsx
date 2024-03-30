import {Component, useEffect} from 'react';

class ClassDisplayKey extends Component {

    state = {
        keyCode: null
    }

    handleKeyCode = (e) => {

        this.setState({
            keyCode: e.key
        })

    }
    componentDidMount() {
        document.addEventListener("keyup", this.handleKeyCode)
    }

    componentWillUnmount() {
        console.log("I'm in unmount")
        document.removeEventListener("keyup", this.handleKeyCode)
    }

    render() {
        const {keyCode} = this.state
        return (
            <div className='card'>
                <div className='card-body'>
                    <h1 className='text-center'>{keyCode}</h1>
                </div>
            </div>
        );
    }
}

export default ClassDisplayKey;