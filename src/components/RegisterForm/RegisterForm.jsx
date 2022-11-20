import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import css from '../ContactForm/ContactForm.module.css';


export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className={css.form}>
      <div className={css.input}>
        <label className={css.input_label}>Username</label>
        <input className={css.input_text} type="text" name="name" required />
      </div>
      <div className={css.input}>
        <label className={css.input_label}>Email</label>
        <input className={css.input_text} type="email" name="email" required />
      </div>      
      <div className={css.input}>
        <label className={css.input_label}>Password</label>
        <input className={css.input_text} type="password" name="password" required />
      </div>
      <button type="submit" className={css.input_button}>Register</button>
    </form>
  );
};
