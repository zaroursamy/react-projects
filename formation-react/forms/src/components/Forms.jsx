import { Component } from "react";
import Car from './Car'

class Form extends Component{

    state = {
        username: '',
        colors: ["", "red", "blue", "green"],
        currentColor: '',
        comments: ''
    }

    changePseudo = e => {

        this.setState({
            username: e.target.value
        })
    }

    changeCurrentColor = e => {
        console.log(e.target)
        this.setState({
            currentColor: e.target.value
        })
    }

    handleComments = e => {

        this.setState({
            comments: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault() // ne pas recharger la page

        console.log(this.state)
    }

    render(){


        return(
            <div>
                <Car color={this.state.currentColor} height="400"></Car>
                <h1>Commentaire</h1>
                
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Pseudo:</label><br />
                        <input type="text" onChange={this.changePseudo}/>
                    </div>
                    
                    <div>
                        <label>Color:</label><br />
                        <select value={this.state.currentColor} onChange={this.changeCurrentColor}>
                        {
                            this.state.colors.map(color => {
                                return <option key={color} value={color}>{color}</option>
                            })
                        }
                        </select>
                        
                    </div>

                    <div>
                        <label>Comments</label><br/>
                        <textarea value={this.state.comments} onChange={this.handleComments}></textarea>
                    </div>

                    <button>Validate</button>
                </form>
            </div>
        )
    }
}

export default Form