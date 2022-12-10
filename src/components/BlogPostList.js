import BlogPostListItem from "./BlogPostListItem";



export default function BlogPostList(props){
    return(
        <section>
          <BlogPostListItem date={props.date} title={props.title} img={props.img} content={props.content}/>
        </section>
    )
}