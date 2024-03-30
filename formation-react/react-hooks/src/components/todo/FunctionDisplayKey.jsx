import React, {useState, useEffect} from 'react';

function FunctionDisplayKey(props) {

    const [state, setState] = useState({keyCode: null})

    const setKey = (e) => {
        setState({keyCode: e.key})
    }

    useEffect(() => {
        document.addEventListener("keyup",  setKey)

        return () => {
            document.removeEventListener("keyup", setKey)
        }

    }, [state]);


    return (
        <div className='card'>
            <div className='card-body'>
                <h1 className='text-center'>{state.keyCode}</h1>
            </div>
        </div>
    );
}

export default FunctionDisplayKey;