import { useHistory } from "react-router-dom";

const UnderConstruction = (props) => {

    const history = useHistory();

    console.log(props);

    setTimeout(() => {
        history.push('/')

    }, 1000)

    return (
        <div className="alert alert-warning mt-3" role="alert">
            You will be redirected to Docs
        </div>
    )

}

export default UnderConstruction;