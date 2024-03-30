const Welcome = () => {

    const bonjour = () => {
        console.log("Bonjour")
    }

    const bonsoir = (msg) => {
        console.log(msg)
    }

    return (
        <div>
            <button onClick={bonjour}>Bonjour</button>
            <button onClick={bonsoir.bind(this, "Bonsoir")}>Bonsoir</button>
            <button onClick={() => console.log("Bonne nuit")}>Bonne nuit</button>
        </div>
    )
}

export default Welcome