const Wrapper = ({children}) => {

    console.log(children)
    
    return (
        <div style={{
            padding: '10px',
            margin: '5px auto',
            width: '400px',
            backgroundColor: 'rgb(129, 244, 244)',
            textAlign: 'left'
        }}>
            {children}
        </div>
    )
}

export default Wrapper