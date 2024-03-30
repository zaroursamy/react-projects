import { ListGroup } from "react-bootstrap"

const Quality = ({quality}) => {

    return  (
                <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-start" 
                    action 
                    variant="dark" 
                    onClick={() => alert("Listen")}
                >
                        {quality}
                </ListGroup.Item>
    )

}

export default Quality