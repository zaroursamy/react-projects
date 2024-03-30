import { Component } from 'react';
import MyCars from './components/MyCars';
import './App.css';

class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures'
  }

  render() {
    return (
      <div className='App'>
        <MyCars title={this.state.titre} />
      </div>
    )
  }
}

export default App;