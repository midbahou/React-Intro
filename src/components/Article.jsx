/* eslint-disable react/prop-types */


function Article(props){
    console.log(props);
    
    return(
        <article>
            <h2>{props.title}</h2>
            <h2>{props.date}</h2>

            <p>{props.content}</p>

                       
        </article>
    );
}

export default Article;