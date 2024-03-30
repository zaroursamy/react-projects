import React, { useRef, useState } from 'react';

function Input(props) {

    const [inputValue, setInputValue] = useState('')
    const inputEl = useRef(null)


    const updateInputValue = () => {
        setInputValue(inputEl.current.value)
    }


    const focus = () => {
        console.log(inputEl.current.value);
        inputEl.current.focus()
    }

    return (
        <div>
            <input ref={inputEl} type='text' onChange={updateInputValue}></input>
            <button onClick={focus}>Focus</button>
        </div>
    );
}

export default Input;