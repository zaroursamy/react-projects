import Quality from "./Quality"
import { Container, ListGroup } from "react-bootstrap"

const Qualities = ({qualities}) => {

    const qualitiesToDisplay = qualities.map((quality, i) => {
        return <Quality quality={quality} key={i}/>
    })

    return(
        <Container className="border" style={{marginBottom: "10px", marginTop: '10px', borderRadius: "10px", padding: "1em"}}>
            <h4>Qualities</h4>
                <ListGroup>
                    {qualitiesToDisplay}
                </ListGroup>
        </Container>
    )

    

}


export default Qualities