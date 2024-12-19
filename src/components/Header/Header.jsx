import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext/UserState'
import { Avatar, Space, Button } from "antd";

const Header = () => {
  const { user, logout } = useContext(UserContext)
  const navigate = useNavigate()
  const logoutUser = () => {
    logout()
    navigate("/login")
  }

  return (
    <div>
          <Link to="/">Products</Link> / 
      {user ? (
        <>
       
          <Link to="/profile">
          <Space size={16} wrap>
              <Avatar>{user.firtName[0]}</Avatar>
            </Space>
            </Link>{" "}
            /<Button onClick={logoutUser}> Logout</Button>
    </>
      ) : (
        <>
    <Link to="/register">Register</Link> / 
    <Link to="/login">Login</Link> /
      </>
    )}
    </div>
  )
}

export default Header