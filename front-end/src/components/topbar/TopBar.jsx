import './topbar.css';
import { Link } from 'react-router-dom';

export default function topbar() {
  const user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram"></i>
      </div>

      <div className="topCenter">
        <ul className="topMenu">
          <li className="topListItem">
            <Link to="/" className="Link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="Link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="Link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="Link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="Link">
              {user && 'LOGOUT'}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://c.tenor.com/ulx2Jsysht0AAAAi/cute-ka-sana-kaso-may-putok-ka-dog.gif"
            alt=""
          />
        ) : (
          <ul className="topMenu">
            <li className="topListItem">
              <Link className="Link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="Link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
