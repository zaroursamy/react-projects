import { Component } from "react"

const fighter = (FighterComponent, hitValue) => {

    class Fighter extends Component {

        state = {
            hits: 0
        }
    
        incrementHits = () => {

            this.setState(prevState => {
                return {
                    hits: prevState.hits + 1
                }
            })

            this.props.decrementHealth(this.props.name, hitValue)
        }

        render(){
            console.log(this)
            return <FighterComponent health={this.props.health} hit={this.incrementHits} fighterState={this.state} {...this.props}/>
        }
    }

    return Fighter

}

export default fighter