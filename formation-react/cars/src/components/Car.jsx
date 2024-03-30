import { Fragment } from "react";

const Car = ({color, children, year}) => {
    
    const todayYear = new Date().getFullYear();
    
    
    const getAge = () => {
        let age = todayYear - year;
        console.log(age);
        
        return age <= 0 ? "0 an" : (age == 1 ? "1 an" : age + " ans");
    }
    
    const colorInfo = color ? `${color}` : `Unknown`;
    
    
    if (children) {

        console.log(children);

        return (
                <tr>
                    <td>{ children }</td>
                    <td>{ getAge(year) }</td>
                    <td>{colorInfo}</td>
                </tr>
    
            )
        }
    }
    
    export default Car
    