import { Container } from "react-bootstrap";
import Skill from "./Skill"

const Skills = ({skills}) => {

    const skillsToDisplay = skills.map(({skill, progress}, idx) => {
        return <Skill key={idx} progress={progress}>{skill}</Skill>
    })


    return (
        <Container className="border" style={{marginBottom: "10px", marginTop: '10px', borderRadius: "10px", padding: "1em"}}>
            <h4>Skills</h4>
            {skillsToDisplay}
        </Container>
        
    )
    
}

export default Skills