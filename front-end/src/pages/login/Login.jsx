import './login.css';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="login">
        <span className="loginTitle">Log In</span>
      <form className="loginForm">
        <label>Email</label>
        <input className="loginInput" type="text" placeholder="ihsen@devcom" />

        <label>Password</label>
        <input className="loginInput"  type="password" />

        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton"><Link className="Link" to="/register">Register</Link></button>
    </div>
  );
}
