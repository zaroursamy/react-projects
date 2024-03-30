import React from 'react';

function ProgressBtn({color, increment, children}) {
    const btnClassName = `btn btn-${color}`
    return (
        <button className={btnClassName} onClick={increment}>{children}+%</button>
    );
}

export default ProgressBtn;