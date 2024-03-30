import React, {useContext} from 'react';
import {ColorContext, UserContext} from "./UserContext.jsx";

function ContentData(props) {

    const color = useContext(ColorContext)
    const user = useContext(UserContext)

    return (
        <div style={{backgroundColor: color}}>
            <ul>
                <li>Name: {user.name}</li>
                <li>Age: {user.age}</li>
            </ul>
        </div>
    )
}

export default ContentData;