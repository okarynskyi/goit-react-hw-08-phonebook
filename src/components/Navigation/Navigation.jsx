import { useAuth } from 'hooks/useAuth';
import { NavLink } from 'react-router-dom';
import css from "./Navigation.module.css";

const getClassName = ({isActive}) => {
    return isActive ? `${css.link} ${css.active}` : css.link;
}

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={getClassName} to="/">Home</NavLink>
      {isLoggedIn && <NavLink className={getClassName} to="/contacts">Contacts</NavLink>}
    </nav>
  );
};
