import "./header.css"
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate()
    const {user} = useContext(AuthContext)
  return (
    <header>
  <h2>Logo</h2>
  <nav>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About us</Link></li>
    </ul>
  </nav>
  <img src={user?.avatar ||"https://res.cloudinary.com/dileah1ig/image/upload/v1757442337/avatar_jt1vlf.png"} alt="account" onClick={() => navigate("/account")} />
</header>

  )
}

export default Header;
