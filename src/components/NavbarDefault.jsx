import moonIcon from "../../assets/images/icon-moon.svg";
import sunIcon from "../../assets/images/icon-sun.svg";
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";

export default function NavbarDefault({ isDarkMode }) {
  return (
    <Navbar className="mx-auto max-w-screen-xl px-2 py-2 lg:px-4 lg:py-4 mb-16">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <img src="../../assets/images/logo.svg" alt="" />
        {isDarkMode ? (
          <IconButton>
            <img src={sunIcon} alt="Sun icon" className="w-5 h-5 " />
          </IconButton>
        ) : (
          <IconButton className="bg-blue-gray-100">
            <img src={moonIcon} alt="Moon icon" className="w-5 h-5 " />
          </IconButton>
        )}
      </div>
    </Navbar>
  );
}
