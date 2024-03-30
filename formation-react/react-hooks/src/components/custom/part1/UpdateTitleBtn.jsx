import { useEffect, useState } from "react";
import useUpdateTitle from "./hooks/useUpdateTitle";

function UpdateTitleBtn() {

    const [text, settext] = useState('');
    const [flag, setflag] = useState(true);

    useEffect(() => {
        if(flag){
            settext("Hello world")
        }
        else {
            settext('Hello world !')
        }
    }, [flag])

    useUpdateTitle(text)

    return (
        <button onClick={() => setflag(!flag)}>Say hello</button>
    );
}

export default UpdateTitleBtn;