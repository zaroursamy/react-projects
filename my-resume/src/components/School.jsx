import { useState } from "react";

const School = ({title, school, startYear, endYear, link}) => {

    const [cursor, setCursor] = useState('default');

    const changeCursor = () => {
        setCursor(prevState => {
            return prevState === 'default' ? 'pointer' : 'default'
          
        });
    }

    const addTitleStyle = (e) => {
        e.target.classList.add('styledSchoolTitle')
        changeCursor()
    }

    const removeTitleStyle = (e) => {
        e.target.classList.remove('styledSchoolTitle')
        changeCursor()
    }

    const openNewTab = (link) => {
        console.log(link)
        window.open(link, '_blank').focus();
    };



    return(

            <tr align="left">
                <td>
                    <strong style={{ cursor: cursor }} align="left" onClick={openNewTab.bind(this, link)} onMouseOut={removeTitleStyle} onMouseOver={addTitleStyle}>
                        {title}
                    </strong>
                         
                </td>
                <td>
                    <strong style={{ cursor: cursor }} align="left" onClick={openNewTab.bind(this, link)} onMouseOut={removeTitleStyle} onMouseOver={addTitleStyle}>
                        {school}
                    </strong>
                </td>
                <td align="right">{startYear}</td>
                <td align="right">{endYear}</td>
            </tr>
    )

    

}

export default School