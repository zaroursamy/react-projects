const Toto = props => {

    console.log(props)
    return (
      <div>
          <h2>{props.name}</h2>
          <button 
            onClick={() => props.reponseTotoProps("Je vais regarder la tv")}
            disabled={props.leState.disabled}
              
          >Réponse</button>
  
          <p>{props.leState.messageToto}</p>
      </div>
    )
  }
  
  export default Toto