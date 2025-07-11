import React, { useEffect, useState, useReducer } from "react";
import CardWithLink from "./components/CardWithLink";
import TransparentTabs from "./components/TransparentTabs";
import NavbarDefault from "./components/NavbarDefault";
import CardList from "./components/CardList";
import { FILTERCRITERIA } from "./constants";
import { data } from "autoprefixer";

function reducer(state, action) {
  switch (action.type) {
    case "SET_FILTER":
      return { ...state, filter: action.payload.filter };
    case "SET_DATA":
      return { ...state, data: action.payload.data };
    case "TOGGLE_ACTIVE":
      return {
        ...state,
        data: state.data.map((item) =>
          item.name === action.payload.name
            ? { ...item, isActive: !item.isActive }
            : item
        ),
      };
    case "REMOVE_EXTENSION":
      return {
        ...state,
        data: state.data.filter((item) => item.name !== action.payload.name),
      };
    case "TOGGLE_DARK_MODE":
      return { ...state, isDarkMode: !state.isDarkMode };

    default:
      throw new Error(`Unknown action type: ${action.type}`);
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    filter: "All",
    data: [],
    isDarkMode: false,
  });

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonData) =>
        dispatch({ type: "SET_DATA", payload: { data: jsonData } })
      )
      .catch((err) => console.error("Failed to load data:", err));
  }, []);

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        state.isDarkMode
          ? "bg-gradient-to-b from-[#050b1c] to-[#09153f]"
          : "bg-gradient-to-b from-blue-50 to-green-50"
      }`}
    >
      <div className="mx-auto max-w-6xl px-6 py-8">
        <NavbarDefault isDarkMode={state.isDarkMode} dispatch={dispatch} />
        <TransparentTabs state={state} dispatch={dispatch} />
        <CardList data={state.data} state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
