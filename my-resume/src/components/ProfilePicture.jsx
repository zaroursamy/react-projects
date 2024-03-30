import { Container, Figure, Image } from 'react-bootstrap'
import profile from './profile.jpeg'

const ProfilePicture = () => {

    return (
    // <Image src={profile} roundedCircle width='250' height='250'/>
    <Figure>
        <Figure.Image src={profile} roundedCircle width='250' height='250' />
        <Figure.Caption>Samy Zarour, Senior Data Engineer</Figure.Caption>
    </Figure>
    )

}


export default ProfilePicture