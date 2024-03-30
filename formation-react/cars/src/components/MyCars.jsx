import { Component, Fragment } from 'react'
import Car from './Car'
import Welcome
from './Welcome'


class MyCars extends Component {
    
    state = {
        title: "My cars catalog",
        cars: [
            {brand: "Mercedes", year: 2024, color: "black"},
            {brand: "BMW", year: 2023, color: "white"},
            {brand: "Audi", year: 2000, color: "gray nardo"},
            
        ]
    }
    
    addStyle = (e) => {
        console.log(e.target)
        e.target.classList.add('styled')
    }
    
    removeStyle = (e) => {
        console.log(e)
        e.target.classList.remove('styled')
    }
    
    andOneYear = (e) => {
        console.log(e)
        
        this.setState(
            this.state.cars.map(car => car.year+=1)
            )
    }

    
        
        
        render() {

            const allCarsDisplayed = this.state.cars.map(({year, color, brand}, i) => {
                    console.log(year, color, brand);
                    return (<Car key={i} year={year} color={color}>{brand}</Car>);
                })

            console.log(allCarsDisplayed);
            
            
            return (
                <>
                    <Welcome />
                    <h1 onMouseOver={this.addStyle} onMouseLeave={this.removeStyle}>{this.state.title}</h1>
                    <button onClick={this.andOneYear}>+1 year</button>
                    <table className='carsTable'>
                        <tbody>
                            <tr>
                                <th>Brand</th>
                                <th>Age</th>
                                <th>Color</th>
                            </tr>
                        
                            {allCarsDisplayed}
                        </tbody>
                        
                    
                    </table>
                    
                
                </>
                )        
            }
        }

export default MyCars