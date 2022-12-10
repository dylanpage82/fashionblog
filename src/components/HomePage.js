import Header from "./Header";
import BlogPostList from "./BlogPostList";
import Footer from "./Footer"
import blogArr from "../data"

const post = blogArr.map((ele, idx) =>{
    return(
        <BlogPostList
        key={idx}
        date={ele.date}
        title={ele.title}
        img={ele.img}
        content={ele.content}
        />
    );
});

export default function HomePage(props){
    return (
        <>
        <Header />
        <main>{post}</main>
        <Footer />
        </>
    )
}