import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import DarkMode from "./darkMode";

export default function TopBar() {
  return (
    <div className="bg-white text-black shadow-sm text-lg">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-x-12">
            <Link to="/">
              <img src="/img/atvyl-logo.jpg" className="my-2 h-16" alt="" />
            </Link>

            <ul className="list-inline flex gap-x-12">
              <li>
                <Link
                  className="hover:text-primary font-gotham font-medium"
                  to="/"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary font-gotham font-medium"
                  to="/accounts"
                >
                  Accounts
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary font-gotham font-medium"
                  to="/sheets"
                >
                  Sheets
                </Link>
              </li>

              <li>
                <Link
                  className="hover:text-primary font-gotham font-medium"
                  to="/"
                >
                  Prints
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="list-inline flex gap-x-8">
              <li>
                <FontAwesomeIcon icon={faSearch as IconProp} />
              </li>

              <li>
                <DarkMode />
              </li>

              <li>
                <FontAwesomeIcon icon={faUser as IconProp} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
