export default function Header(props){
    return(
        <header>
        <h1>Satre's List</h1>
        <h2>Better-Dressed People</h2>
        <nav aria-label="Main Navigation" role="navigation">
            <ul className="top-nav">
                <li><a href="">Women's</a></li>
                <li><a href="">Men's</a></li>
                <li><a href="">On the Street</a></li>
                <li><a href="">The Catwalk</a> </li>
                <li><a href="">AdWatch</a></li>
                <li><a href="">About</a></li>
            </ul>
        </nav>
    </header>
    )
}