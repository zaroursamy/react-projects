import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Content from "./Content";

function Box() {

    const [height, setHeight] = useState(100)

    const divBoxRef = useRef(null)
    

    // N'attend pas la fin du render pour s'activer: on ne voit pas la div bleue
    useLayoutEffect(() => {

        const dimensions = divBoxRef.current.getBoundingClientRect()
        console.log(dimensions);

        if(divBoxRef.current.offsetHeight <= 150){
            setHeight(height+100)
        }

    
    }, [height])

    const boxStyle = {
        width: '400px',
        height: `${height}px`,
        margin: '0 auto',
        background: height <= 150 ? 'blue' : 'red'
    }

    return (
        <div ref={divBoxRef} style={boxStyle}>
            {`Height = ${height}`}
            <Content/>
        </div>
    );
}

export default Box;