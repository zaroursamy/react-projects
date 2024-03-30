import { useEffect, useRef, useState } from 'react';

function Incrementor() {

    const [counter, setCounter] = useState(0)

    const intervalRef = useRef()

    useEffect(() => {

        intervalRef.current = setInterval(() => {
            setCounter(prev => {
                return prev+1
            })
        }, 1000)
    }, []) // Au moment de componentDidMount





    const stopIncrement = () => {
        console.log(intervalRef.current);
        clearInterval(intervalRef.current)
    }

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={stopIncrement}>Stop</button>
        </div>
    );
}

export default Incrementor;