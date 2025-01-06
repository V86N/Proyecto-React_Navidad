import React, { createContext, useReducer } from 'react';
import axios from 'axios'
import UserReducer from "./UserReducer.js"

const token = localStorage.getItem("token") || "";
const user = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  token: token,
  user: user,
};

const API_URL = "http://localhost:3000/users"

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);
  
const createUser = async (body) => {
      await axios.post("http://localhost:3000/users/create", body);
      };

const login = async (user) => {
    const res = await axios.post(API_URL + "/login", user);
        dispatch({
          type: "LOGIN",
          payload: res.data,
        });
        if (res.data) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }
      };
      const getUserInfo = async () => {
        
        const token = localStorage.getItem("token");
        const res = await axios.get(API_URL + "/getInfo", {
          headers: {
            Authorization: token,
          },
        });
        
        dispatch({
          type: "GET_USER_INFO",
          payload: res.data.user
          });
      };
      const logout = async () => {
        const token = localStorage.getItem("token");
        const res = await axios.delete(API_URL + "/logout",  
        {
          headers: {
            authorization: token,
          },
        });
        dispatch({
          type: "LOGOUT"
          
        });
        if (res.data) {
          localStorage.removeItem("token");
        }
      };
    
    return (
      <UserContext.Provider
        value={{
          token: state.token,
          user: state.user,
         createUser,
         login,
         getUserInfo,
         logout
        }}>
        {children}
      </UserContext.Provider>
    );
  };  
  
