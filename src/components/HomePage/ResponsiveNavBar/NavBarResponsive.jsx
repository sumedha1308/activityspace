import './navBarResponsive.css';
// eslint-disable-next-line no-unused-vars
import Hamburger from './Hamburger.jsx';

export default function Nav() {
  return (
    <div>
      <div className="navigation">
        <ul>
          <li>Logo</li>
          <li>Activities</li>
          <li>Login</li>
        </ul>
        <div className="hamburger">
          <Hamburger />
        </div>
      </div>
    </div>
  );
}
