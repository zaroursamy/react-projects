import { PureComponent } from "react";
import { Button } from "react-bootstrap";

class DescriptionModal extends PureComponent {


    render(){

        console.log(this.props);

        return ReactDOM.createPortal(
            <div className="descriptionModal" onClick={this.props.closeModal}>
                <div>
                    <p>{this.props.text}</p>
                    <Button variant="dark" >Close</Button>
                </div>
            </div>,
            document.getElementById("modal-root")
        )
    }
}

export default DescriptionModal