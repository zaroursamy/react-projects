import { Col, Container, ListGroup, Row } from "react-bootstrap"
import PhoneSVG from '../assets/phone.svg'

const PersonalInformation = ({information}) => {

    const {phone, email, links} = information
    const linksBlock = links.map((link, idx) => {
        return <ListGroup.Item action href={link} variant="dark" key={idx}><i class="bi-link" /> <span>{link}</span></ListGroup.Item>
    })

    const mailTo = `mailto:${email}`
    const telTo = `tel:${phone}`
    
    return(
        <Container className="border" style={{marginBottom: "10px", borderRadius: "10px", padding: "1em", fontSize: "12px"}}>
            <h4>Personal information</h4>
            <ListGroup>
                <ListGroup.Item action href={mailTo} variant="dark">
                <i class="bi-envelope"></i> <span>{email}</span>
                </ListGroup.Item>
                <ListGroup.Item action href={telTo} variant="dark">
                    <i class="bi bi-telephone-outbound-fill" />  <span>{phone}</span>
                </ListGroup.Item>
                {linksBlock}
            </ListGroup>
        </Container>

            
    )
}

export default PersonalInformation