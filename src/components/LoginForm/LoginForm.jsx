import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/selectors';
import { logIn } from 'redux/auth/authOperations';
import css from '../ContactForm/ContactForm.module.css';



export const LoginForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
        <div className={css.input}>
          <label className={css.input_label}>Email</label>
          <input className={css.input_text} type="email" name="email" required />
        </div>
        <div className={css.input}>
          <label className={css.input_label}>Password</label>
          <input className={css.input_text} type="password" name="password" required />
        </div>        
        <button type="submit" className={css.input_button}>Log In</button>
      </form>
      {isLoading && <div>Loading page...</div>}
    </>
  );
};