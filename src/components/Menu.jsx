import { React } from "react";
import "./Menu.css";
import { NavLink, Link } from "react-router";
export default function Menu() {
  return (
    <div className="Menu">
      <Link className="link" to="/">
        Strana 1
      </Link>
      <Link className="link" to="/2">
        Strana 2
      </Link>
    </div>
  );
}
