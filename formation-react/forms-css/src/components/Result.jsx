import { Component } from "react";
import Message from './Message'
import ChangeStateButton from "./ChangeStateButton";
import CustomBtn from "./CustomBtn";
import { Container, Row } from "react-bootstrap";

class Result extends Component{

    state = {
        name: 'Mario',
        winner: false,
        step: 1
    }

    changeWinner = () => {
        this.setState({
            winner: !this.state.winner,
            step: this.state.step+1
        })
    }

    render(){

        console.log(`Result.render() ${this.state.step}`)
        return (
            <Container fluid="lg">
                {console.log(`Result.render.DOM() ${this.state.step}`)}
                <Row>
                    {console.log(`Result.render.Row1DOM() ${this.state.step}`)}

                    <Message name={this.state.name} winner={this.state.winner}></Message>
                </Row>

                <Row>
                    {console.log(`Result.render.Row2DOM() ${this.state.step}`)}

                    <CustomBtn variant="primary" changeWinner={this.changeWinner}>Change Status</CustomBtn>
                    <CustomBtn variant="warning" changeWinner={this.changeWinner} alertMe={this.props.alertMe}>Change status and alert</CustomBtn>
                </Row>
                
            </Container>
           )
    }

    componentDidMount(){
        console.log(`Result.componentDidMount() ${this.state.step}`)
    }

    componentDidUpdate(prevProps, prevState){
        console.log(`Result.componentDidUpdate() prev=${prevState.step}, current=${this.state.step}`)
    }

    componentWillUnmount(){
        
    }
}


export default Result;