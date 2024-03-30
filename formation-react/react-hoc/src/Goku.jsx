import { Component } from 'react'
import goku from './assets/goku.png'
import fighter from './Fighter'
import { Badge } from 'react-bootstrap'
import ProgressHealth from './ProgressHealth'

export class Goku extends Component {

    
    
    render() {

        const {name, fighterState, hit, health} = this.props

        const healthDisplayed = health > 0 ?  <span>{health}%</span> : <Badge bg="danger">Dead</Badge>

        const buttonDisplayed = health > 0 ? <button className='btn btn-success m-3' onClick={hit}>Hit</button> : <button className='btn btn-secondary m-3 disabled' onClick={hit}>Dead</button>

        if(health <= 0){
            //throw new Error("Goku can't die")
        }

        return (

          
        <div className='col border'>
            <h2>{name}</h2>
            <img src={goku} alt='goku' width='300' height='350'></img><br/>
            {buttonDisplayed}
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th scope='col'>#Hits</th>
                        <th scope='col'>Health</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {fighterState.hits}
                        </td>
                        <td>
                            {healthDisplayed}
                        </td>
                    </tr>
                    
                </tbody>
            </table>
            <ProgressHealth health={health}/>
        </div>
        )
    }
}

export default fighter(Goku, 11)