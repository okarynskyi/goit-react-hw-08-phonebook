import { NavLink } from 'react-router-dom';
import css from "../Navigation/Navigation.module.css";

const getClassName = ({isActive}) => {
    return isActive ? `${css.link} ${css.active}` : css.link;
}

export const AuthNav = () => {
  return (
    <div>
      <NavLink className={getClassName} to="/register">Register</NavLink>
      <NavLink className={getClassName} to="/login">Log In</NavLink>
    </div>
  );
};
