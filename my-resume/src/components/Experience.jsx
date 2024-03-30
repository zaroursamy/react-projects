import { Col, Container, ListGroup, Row } from "react-bootstrap"

const Experience = ({jobTitle, company, from, to, projects}) => {
    
    const listenProject = (e) => {
        alert(`Ecouter`)
    }

    const projectsToDisplay = projects.map((project, i) =>{
        return <ListGroup.Item 
                    as="li"
                    className="d-flex justify-content-between align-items-start" 
                    action 
                    variant="dark" 
                    onClick={listenProject}
                    key={i}>
                        {project}
                 </ListGroup.Item>
    })

    return(
        <Container className="border border-success border-2 justify-content-md-center" style={{padding: "1em", marginBottom: "20px", borderRadius: "10px"}}>
            <Row>
                <Col><strong>{jobTitle}</strong> @<a style={{color: "gray", hover: "bold"}} href={company.link} target="_blank">{company.name}</a></Col>
                <Col><span>From {from} to {to}</span></Col>
            </Row>

            <Row>
                <ListGroup>
                    {projectsToDisplay}
                </ListGroup>
            </Row>
            
        </Container>
    )
}

export default Experience