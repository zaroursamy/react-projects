import { Button } from "react-bootstrap"

const CustomBtn = ({variant, backgroundColor, borderRadius, changeWinner, alertMe, children}) => {

    const alertAndChangeWinner = () => {
        changeWinner()
        alertMe ? alertMe() : () => {}
    }
    const customBtnStyle = {
        backgroundColor: `${backgroundColor}`,
        border: "none",
        color: "#fff",
        fontSize: "19px",
        padding: "15px 30px",
        textAlign: "center",
        textDecoration: "none",
        borderRadius: `${borderRadius}`,
        display: "block",
        margin: "5px auto",
    }

    return <Button onClick={() => alertAndChangeWinner()} variant={variant}>{children}</Button>
}

export default CustomBtn