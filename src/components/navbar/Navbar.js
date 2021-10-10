import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Simple Political Comments</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;