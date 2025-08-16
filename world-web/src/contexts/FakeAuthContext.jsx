/* eslint-disable react/react-in-jsx-scope */
import { createContext, useContext, useReducer } from "react";


const AuthContext = createContext();
const init = {
  user: null,
  isAuth: false,
};
const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};
function reducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        user: action.payload,
        isAuth:true
      };
    case "logout":
      // return init;
      return { ...state, user: null, isAuth: false };

    default:
      break;
  }
}
function AuthProvider({ children }) {
  const [{ user, isAuth }, dispatch] = useReducer(reducer, init);
  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      dispatch({ type: "login", payload: FAKE_USER });
    }
  }
 
  
  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <AuthContext.Provider value={{ user, isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("Athuteiication context not support here");
  return context;
}
export { useAuth, AuthProvider };
