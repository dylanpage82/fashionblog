export default function BlogPostListItem(props){
    return (
            <article>
                <h2>{props.date}</h2>
                <h1>{props.title}</h1>
                <img src={props.img}/>
                <p>{props.content}</p>
                <a href="">Continues...</a>
            </article>
    
    );
}