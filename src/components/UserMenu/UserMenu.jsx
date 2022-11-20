import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import { useAuth } from 'hooks/useAuth';
import css from './UserMenu.module.css';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.menu}>
      <div>
        Welcome, <span>{user.name}</span>
      </div>
      <button type="button" onClick={() => dispatch(logOut())} className={css.menu_button}>
        Logout
      </button>
    </div>
  );
};