import React, { useReducer, createContext } from "react";
import jwtDecode from "jwt-decode";

const initialState = {
  author: null,
};

if (localStorage.getItem("jwtToken")) {
  const decodedToken = jwtDecode(localStorage.getItem("jwtToken"));

  if (decodedToken.exp * 1000 < Date.now()) {
    localStorage.removeItem("jwtToken");
  } else {
    initialState.author = decodedToken;
  }
}

const AuthContext = createContext({
  author: null,
  login: (authorData) => {},
  logout: () => {},
});

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        author: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        author: null,
      };
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  function login(authorData) {
    localStorage.setItem("jwtToken", authorData.token);
    dispatch({
      type: "LOGIN",
      payload: authorData,
    });
  }

  function logout() {
    localStorage.removeItem("jwtToken");
    dispatch({
      type: "LOGOUT",
    });
  }

  return (
    <AuthContext.Provider
      value={{ author: state.author, login, logout }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };
