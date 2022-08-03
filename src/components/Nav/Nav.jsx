import "./Nav.css"
import {Link} from "react-router-dom"
const Nav = () => {
    return(
    <nav class="navbar">
        <div class="maxwidth">
            <div class="logo">
                <Link to="/"><span>FruitsBlog</span></Link>
            </div>
            <ul class="menu">
                <li><Link to="/fruits">Fruits</Link></li>
                <li><Link to="/vegetables">Vegetables</Link></li>
                <li><Link to="/favorite">Favorite</Link></li>
            </ul>
        </div>
    </nav>
    )
}
export default Nav;