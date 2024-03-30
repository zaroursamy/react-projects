import React from 'react';

function ProgressCounter({count, bgColor, children}) {

    const width = `${count}%`
    const color = `bg-${bgColor}`
    
    return (
        // sans react memo on rentre dans les deux a chaque fois
        <>
            
            {console.log(`Je suis dans ${children}`)}

            <p className='h1'>{width}</p>

            <div className='progress'>
                <div
                    className={`progress-bar progress-bar-striped ${color}`}
                    role='progressbar' 
                    style={{width: width}}>
                </div>
            </div>
        </>

    );
}

export default React.memo(ProgressCounter);