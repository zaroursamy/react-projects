import { Component } from "react";
import { Alert } from "react-bootstrap";

class FighterError extends Component{

    constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    
      static getDerivedStateFromError(error) {
        // Mettez à jour l'état, de façon à montrer l'UI de repli au prochain rendu.
        return { hasError: true };
      }
    
      render() {

        console.log(this.props)
        if (this.state.hasError) {
          return <Alert variant="danger">Goku can&apost die</Alert>;
        }

        return this.props.children;
      }


}

export default FighterError