import { Col, Container, ProgressBar, Row } from "react-bootstrap"

const Skill = ({progress, children}) => {

    return(
            <Container className="border border-success rounded-pill border-1" style={{marginTop: "1px", marginBottom: "8px"}}>
                    <span style={{fontSize: "12px"}}><i>{children}</i></span>
                    <ProgressBar style={{margin: "10px"}}  now={progress} label={`${progress}%`} variant="success" visuallyHidden/>
            </Container>
    )
}

export default Skill