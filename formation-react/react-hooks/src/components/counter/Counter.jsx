import React, {useReducer} from 'react';


const init = 0

const reducer = (state, action) => {
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return init
        default:
            state
    }
}

function Counter(props) {

    const [count, dispatch] = useReducer(reducer, init)

    return (
        <div>
            <h1>{count}</h1>
            <button className='btn btn-success m-3' onClick={() => dispatch('increment')}>+</button>
            <button className='btn btn-danger m-3' onClick={() => dispatch('decrement')}>-</button>
            <button className='btn btn-primary m-3' onClick={() => dispatch('reset')}>0</button>
        </div>
    );
}

export default Counter;