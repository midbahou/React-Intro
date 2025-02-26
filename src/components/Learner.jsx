

function Learner(props) {
    console.log(props);
    
    
    return(
        <div>
            <h2>Name: {props.name}</h2>

            <h3>Age: {props.age}</h3>

            <h4>Last Login: {props.lastLogin}</h4>
        </div>
    )
}

export default Learner;