import { Component } from 'react';
import Toto from './Toto';

class Maman extends Component {
    state = {
        messageMaman: null,
        messageToto: null,
        disabled: true
    }

    // Compléter le code de la méthode ordreMaman.
    ordreMaman = (ordre) => {
        this.setState({
            messageMaman: ordre,
            disabled: false
        })
    }

    reponseToto = msg => this.setState({ messageToto: msg });

    render() {
        return (
            <>
                <h1>Maman</h1>
                <button 
                    onClick={() => this.ordreMaman("Va ranger ta chambre")}
                >Order de la mère</button>

                <p>{this.state.messageMaman}</p>

                <hr />
                
                <Toto 
                    name="Toto"
                    reponseTotoProps={this.reponseToto}
                    leState={this.state}
                /> 
            </>
        )
    }
}

export default Maman;