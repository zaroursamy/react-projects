import React from "react";

const MyRef3 = React.forwardRef((props, ref) => {
    
    
    return (
        <div>
            <input ref={ref} type="text" />
        </div>
        )
        
    })
    
    
    export default MyRef3