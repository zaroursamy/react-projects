import './App.css'
// import Todo from "./components/Todo.jsx";
// import Container from "./components/Container.jsx";
// import Profile from "./components/user/Profile.jsx";
import Profile from './components/usememo/Profile.jsx'
import {useCallback, useState, useEffect, useMemo} from "react";
import {ColorContext, UserContext} from "./components/user/UserContext.jsx";
import Counter from "./components/counter/Counter.jsx";
import ProgressCounter from './components/counter/ProgressCounter.jsx';
import ProgressBtn from './components/counter/ProgressBtn.jsx';
import axios from 'axios';
import Input from './components/useref/Input.jsx';
import Incrementor from './components/useref/Incrementor.jsx';
import Layout from './components/layouteffect/Layout.jsx';
import Box from './components/layouteffect/Box.jsx';
import UpdateTitleBtn from './components/custom/part1/UpdateTitleBtn.jsx';
import UpdateTitleInput from './components/custom/part1/UpdateTitleInput.jsx';
import Contacts from './components/custom/part2/Contacts.jsx';

function App() {
/*
    const [user] = useState({
        user: {
            name: 'Lisa',
            age: 8
        }
    })
    
    const [color] = useState('red')

  return (
    <UserContext.Provider value={user.user}>
        <ColorContext.Provider value={color}>
            <Profile/>
        </ColorContext.Provider>
    </UserContext.Provider>

      <Counter></Counter>
    

  )
*/

/*

  const [countLeft, setCountLeft] = useState({value: 0, btnColor: 'success', increment: 25})
  const [countRight, setCountRight] = useState({value: 0, btnColor: 'danger', increment: 20})


  const setLeft = useCallback(() => {
    countLeft.value<100 && setCountLeft({...countLeft, value: countLeft.value+countLeft.increment}) 
  }, [countLeft]) 

  const setRight = useCallback(() => {
    countRight.value<100 && setCountRight({...countRight, value: countRight.value+countRight.increment}) 
  }, [countRight]) 

  return(
    <div className='container'>
      <ProgressCounter count={countLeft.value} bgColor={countLeft.btnColor}>Left</ProgressCounter>
      <ProgressCounter count={countRight.value} bgColor={countRight.btnColor}>Right</ProgressCounter>

      <ProgressBtn color={countLeft.btnColor} increment={setLeft}>Left</ProgressBtn>
      <ProgressBtn color={countRight.btnColor} increment={setRight}>Right</ProgressBtn>

    </div>
  )
  */



  /*
  const [count, setCount] = useState(1)

  const [user, setUser] = useState({
    id: 0,
    name: '',
    username: '',
    email: '',
  })

  const memoizedCount = useMemo(() => {
    console.log("idOutOfBound()")
    count > 10
  }, [count])

  const [dark, setDark] = useState(false)

  const updateTheme = () => {

    setDark(!dark)

    !dark ? document.body.classList.add('bg-secondary') : document.body.classList.remove('bg-secondary')
  }

  const btnColor = dark ? `btn btn-dark mb-3 float-right` : `btn btn-light mb-3 float-right`
  const btnText = dark ? <span>Light</span> : <span>Dark</span>

  useEffect(() => {

    async function fetchUser(){
      axios.get(`https://jsonplaceholder.typicode.com/users/${count}`)
      .then(res => {
        const {id, name, username, email} = res.data
        console.log(res.data)
        setUser({
          id: id,
          name: name,
          username: username,
          email: email,
        })
      })
    }
    fetchUser()
    }, [count])
    



  return(
    <div className='container'>
      <h1 className='text-center'>useMemo({count})</h1>

      {memoizedCount && <div className='alert alert-danger' >Danger, id={count} out of bound</div>}

      <button className='btn btn-info mb-3' onClick={() => setCount(count+1)}>Increment</button>
      <button className={btnColor} onClick={updateTheme}>{btnText} mode</button>
      
      <Profile id={count} name={user.name} username={user.username} email={user.email}></Profile>
    </div>
  )
  */

  /*
  return(
    <div >
      <Incrementor/>
      <hr></hr>
      <Input/>
    </div>

  )
  */

  /*
  return(
    <div className='App'>
        <h1>useLayoutEffect</h1>
        <Box/>
    </div>
  )
  */


  /*
  return (
    <div>
      <UpdateTitleBtn/>
      <UpdateTitleInput/>
    </div>
  )

  */


  return (
    <div>
      <h1>My contacts</h1>
      <Contacts />
      <hr/>
      {/*<UpdateTitleBtn/>*/}
    </div>

  )
}

export default App
