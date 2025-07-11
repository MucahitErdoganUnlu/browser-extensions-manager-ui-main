// import moonIcon from "./assets/icon-moon.svg";
// import sunIcon from "./assets/icon-sun.svg";
// import logo from "./assets/logo.svg";
import React from "react";
import { Navbar, IconButton } from "@material-tailwind/react";

export default function NavbarDefault({ isDarkMode, dispatch }) {
  return (
    <Navbar
      className={`mx-auto max-w-screen-xl px-2 py-2 lg:px-4 lg:py-4 mb-16 transition-colors duration-300 ${
        isDarkMode ? "bg-[#1e2435] border-gray-700" : "bg-white border-gray-200"
      }`}
    >
      <div
        className={`container mx-auto flex items-center justify-between transition-colors duration-300 ${
          isDarkMode ? "text-white" : "text-blue-gray-900"
        }`}
      >
        <img src={`${isDarkMode ? "" : "./assets/logo.svg"}`} alt="" />
        <IconButton
          onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
          className={`transition-colors duration-300 ${
            isDarkMode
              ? "bg-[#2e354d] hover:bg-gray-600"
              : "bg-blue-gray-100 hover:bg-blue-gray-200"
          }`}
        >
          <img
            src={
              isDarkMode ? "./assets/icon-sun.svg" : "./assets/icon-moon.svg"
            }
            alt={isDarkMode ? "Sun icon" : "Moon icon"}
            className="w-5 h-5"
          />
        </IconButton>
      </div>
    </Navbar>
  );
}
