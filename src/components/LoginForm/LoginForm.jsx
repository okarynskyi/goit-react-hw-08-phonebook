import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/contactsSelectors';
import { logIn } from 'redux/auth/authOperations';
import { FormLogin, LabelLogin, InputLogin, ButtonLogin } from './LoginForm.styled';


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
      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>
        <button type="submit">Log In</button>
      </form>
      {isLoading && <Loader />}
    </>
  );
};