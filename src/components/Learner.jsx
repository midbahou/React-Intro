

// function Learner(props) {
//     // console.log(props);

//     // props.setCount(100);

//     return (
//         <div style={props.style}>
//             <h2>Name: {props.name}</h2>

//             <h3>Age: {props.age}</h3>

//             <h4>Last Login: {props.lastLogin}</h4>
//         </div>
//     )
// }

// export default Learner;

function Learner({name, age, lastLogin, enrolledCourses, style, setCount}) {
    // console.log(props);

    // setCount(100);

    return (
        <div style={style}>
            <h2>Name: {name}</h2>

            <h3>Age: {age}</h3>

            <h4>Last Login: {lastLogin}</h4>

            <div>
                <h3>Enrolled Courses</h3>
                {
                    enrolledCourses.map((course, idx) => <h4 key={idx}>{course}</h4>)
                }
            </div>

            <button onClick={() => setCount(100)}>Add count</button>
        </div>
    )
}

export default Learner;