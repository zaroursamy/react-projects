import { ProgressBar } from "react-bootstrap"

const ProgressHealth = ({health}) => {

    const color = health >= 80 ? "success" : (health >= 50 ? "info" : (health >= 30 ? "warning" : "danger"))

    return <ProgressBar now={health} variant={color}></ProgressBar>
}

export default ProgressHealth