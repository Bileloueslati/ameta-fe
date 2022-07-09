import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import DarkMode from './darkMode';
import NotificationsDropdown from './notificationsDropdown';
import UserDropDown from './topbar/userDropDown';

export default function TopBar() {
  return (
    <div id="topbar">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-12">
            <Link to="/">
              <img src="/img/atvyl-logo.jpg" className="my-2 h-16" alt="" />
            </Link>

            <nav>
              <ul>
                <li>
                  <Link to="/">Dashboard</Link>
                </li>
                <li>
                  <Link to="/accounts">Accounts</Link>
                </li>
                <li>
                  <Link to="/sheets">Sheets</Link>
                </li>

                <li>
                  <Link to="/">Prints</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <ul className="icons">
              <li>
                <FontAwesomeIcon icon={faSearch as IconProp} />
              </li>

              <li className="relative dropdown">
                <NotificationsDropdown />
              </li>

              <li>
                <DarkMode />
              </li>

              <li className="relative dropdown">
                <UserDropDown />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
