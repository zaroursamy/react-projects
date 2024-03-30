import { Alert } from "react-bootstrap"

const Message = ({name, winner}) => {

    return(
        winner ? <Alert variant="success">Bravo {name}</Alert> : <Alert variant="danger">Raté!</Alert>
    )
}

export default Message