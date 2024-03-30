import React from 'react';

function Profile({id, name, username, email}) {

    const listColor = `list-group-item list-group-item`
    console.log(listColor);
    return (
        <div>
            <ul className='list-group list-group-flush'>
                <li className={listColor}>User ID: {id}</li>
                <li className={listColor}>Name: {name}</li>
                <li className={listColor}>Nickname: {username}</li>
                <li className={listColor}>Email: {email}</li>
            </ul>
        </div>
    );
}

export default React.memo(Profile);