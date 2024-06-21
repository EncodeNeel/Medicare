import React, { createContext, useEffect, useReducer } from "react";

const initialState = {
  user: null,
  role: null,
  token: null,
};

const authContext = createContext(initialState);

const SESSION_DURATION = 3600000; // 1 hour in milliseconds

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role,
      };

    case "LOGOUT":
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("loginTimestamp");
      return {
        ...initialState,
      };

    default:
      return state;
  }
};

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    const storedRole = localStorage.getItem("role");
    const loginTimestamp = localStorage.getItem("loginTimestamp");

    if (storedUser && storedToken && storedRole && loginTimestamp) {
      const currentTime = new Date().getTime();
      const sessionAge = currentTime - parseInt(loginTimestamp, 10);

      if (sessionAge < SESSION_DURATION) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: {
            user: JSON.parse(storedUser),
            token: storedToken,
            role: storedRole,
          },
        });
      } else {
        dispatch({ type: "LOGOUT" });
      }
    }
  }, []);

  useEffect(() => {
    if (state.user && state.token && state.role) {
      localStorage.setItem("user", JSON.stringify(state.user));
      localStorage.setItem("token", state.token);
      localStorage.setItem("role", state.role);
      localStorage.setItem("loginTimestamp", new Date().getTime().toString());
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("loginTimestamp");
    }
  }, [state.user, state.token, state.role]);

  return (
    <authContext.Provider
      value={{
        user: state.user,
        token: state.token,
        role: state.role,
        dispatch,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export { authContext, AuthContextProvider };
