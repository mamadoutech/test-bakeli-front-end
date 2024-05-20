import "./NavBar.css";
import { NavLink, Navigate } from "react-router-dom";

export default function NavBar({ user }) {
  function handleClick(e) {
    e.preventDefault();
    handleLogOut();
    Navigate("/");
  }
  return (
    <div className="nav-container">
      <nav className="navigation">
        {!user ? (
          <ul>
            <NavLink className="link" to="/auth/inscription">
              <li>Inscription</li>
            </NavLink>
            <NavLink className="link" to="/auth/connexion">
              <li>Connexion</li>
            </NavLink>
          </ul>
        ) : (
          <div className="banner-container">
            <h4 className="navH4">Connected as {user.name}</h4>
          </div>
        )}
      </nav>
    </div>
  );
}
