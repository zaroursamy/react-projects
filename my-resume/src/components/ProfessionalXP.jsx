import { Container } from "react-bootstrap"
import Experience from "./Experience"

const ProfessionalXP = ({experiences}) => {

    const experiencesToDisplay = experiences.map((xp, i) => {
        return <Experience 
        jobTitle={xp.jobTitle} 
        company={xp.company}
        from={xp.from}
        to={xp.to}
        projects={xp.projects}
        key={i}
        />
    })

    return (
        <Container className="border" style={{marginBottom: "10px", borderRadius: "10px"}}>
             <h3>Professional Experience</h3>
             {experiencesToDisplay}
        </Container>

    )
}

export default ProfessionalXP