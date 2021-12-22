import './register.css';
import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
      <form className="registerForm">

      <label>UserName</label>
        <input className="registerInput" type="text" placeholder="Enter your UserName" />


        <label>Email</label>
        <input className="registerInput" type="text" placeholder="ihsen@dev.com" />
        

        <label>Password</label>
        <input className="registerInput"  type="password" />

        <button className="registerButton">Register</button>
      </form>
      <button className="registerLoginButton"><Link className="Link" to="/login">Login</Link></button>
    </div>
  );
}
