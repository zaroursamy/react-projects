import { PureComponent } from "react";
import { Button, Container } from "react-bootstrap";
import DescriptionModal from "./DescriptionModal";

class Description extends PureComponent {

    state = {
        showModal: false
    }
    
    openDescriptionModal = () => {
        this.setState({
            showModal: true
        })
    }

    
    
    render() {

        const modal = this.state.showModal && <DescriptionModal text={this.props.description} closeModal={() => this.setState({showModal: false})} />

        return (
            < Container className="border" style={{marginBottom: "10px", marginTop: "10px", borderRadius: "10px"}}>
                <h3>Description</h3>
                <p>{this.props.description}</p>
                <Button variant="success" onClick={this.openDescriptionModal} style={{margin: "5px"}}>Listen</Button>
                {modal}
            </Container>
            
            );
        }
    }
    
    export default Description