import { useState } from 'react';
import useUpdateTitle from './hooks/useUpdateTitle';

function UpdateTitleInput() {

    const [text, settext] = useState('');

    useUpdateTitle(text)

    return (
        <input type='text' value={text} onChange={(e) => settext(e.target.value)}></input>
    );
}

export default UpdateTitleInput;