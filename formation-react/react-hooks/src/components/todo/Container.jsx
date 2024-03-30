import React, {useState} from 'react';
import ClassDisplayKey from "./ClassDisplayKey.jsx";
import FunctionDisplayKey from "./FunctionDisplayKey.jsx";

function Container(props) {

    const [displayCard, setDisplayCard] = useState(true)

    const hideCard = () => {
        setDisplayCard(!displayCard)
    }

    const btnLabel = displayCard ? 'Hide' : 'Display'

    return (
        <div className='text-center'>
            {/*{displayCard && <ClassDisplayKey/>}*/}
            {displayCard && <FunctionDisplayKey/>}
            <button className='btn btn-primary m-3' onClick={hideCard}>{btnLabel}</button>
        </div>
    );
}

export default Container;