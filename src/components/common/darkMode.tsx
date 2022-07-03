import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    localStorage.getItem("theme-color") === "dark"
  );

  useEffect(() => {
    const isDefaultDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (isDefaultDarkMode || isDarkMode) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, [isDarkMode]);

  const handleClick = () => {
    if (!isDarkMode) {
      localStorage.setItem("theme-color", "dark");
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme-color");
      setIsDarkMode(false);
    }
  };

  return (
    <Button onClick={handleClick} variant="link">
      <FontAwesomeIcon
        icon={isDarkMode ? (faSun as IconProp) : (faMoon as IconProp)}
      />
    </Button>
  );
}
