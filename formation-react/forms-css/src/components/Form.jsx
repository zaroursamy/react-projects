import { Component } from "react";
import '../mycss.css' // S'applique aux enfants
import styles from '../myCss.module.css' // Ne s'applique pas aux enfants
import Title from "./Title";
class Form extends Component {


    render(){
        return <>
            <Title></Title>
            <p className="bigfont blue">Je suis un paragraphe</p>
            <h1 className={styles.green}>Je suis un Title vert</h1>
            <button>Valider</button>
        </>
    }
}

export default Form