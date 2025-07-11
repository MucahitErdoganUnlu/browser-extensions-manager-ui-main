import { createContext, useContext, useReducer } from "react";

const ExtensionsContext = createContext(null);

const ExtensionsDispatchContext = createContext(null);

export function ExtensionsProvider({ children }) {
  const [extensions, dispatch] = useReducer(
    extensionsReducer,
    initialExtensions
  );

  return (
    <ExtensionsContext value={extensions}>
      <ExtensionsDispatchContext value={dispatch}>
        {children}
      </ExtensionsDispatchContext>
    </ExtensionsContext>
  );
}

export function useExtensions() {
  return useContext(ExtensionsContext);
}

export function useExtensionsDispatch() {
  return useContext(ExtensionsDispatchContext);
}

function extensionsReducer(state, action) {
  switch (action.type) {
    case "SET_FILTER": {
      return [
        ...state,
        {
          filter: action.payload,
        },
      ];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialFilter = [{ filter: "All" }];
