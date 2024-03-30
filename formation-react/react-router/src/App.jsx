import {BrowserRouter, Route, Switch} from 'react-router-dom'
import './App.css'
import Community from './components/Community'
import Docs from './components/Docs'
import Menu from './components/Menu'
import Tutorial from './components/Tutorial'
import ErrorPage from "./components/ErrorPage";
import UnderConstruction from "./components/UnderConstruction";
import Profile from "./components/Profile";

function App() {

  return (
    <BrowserRouter>
      <Menu />
        <Switch>
            <Route exact path='/' component={Docs} />
            <Route path='/tutorial' component={Tutorial} />
            <Route strict path='/community' component={Community} />
            <Route path='/under-construction' component={UnderConstruction}/>
            <Route path='/user/:id' component={Profile} />

            <Route component={ErrorPage} />
        </Switch>

    </BrowserRouter>
  )
}

export default App
