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
            <Link to="/" className='relative'>
              <img src="/img/dark-logo.png" className="my-2 h-16 dark:opacity-0 relative z-30" alt="" />
              <img src="/img/white-logo.png" className="my-2 h-16 absolute inset-0 z-20" alt="" />
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
