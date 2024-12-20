import React, { useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext/UserState'
import { Avatar, Space, Button, Badge } from "antd";
import { ProductContext } from '../../context/ProductContext/ProductState';
import { ShoppingCartOutlined } from "@ant-design/icons"

const Header = () => {
  const { user, logout } = useContext(UserContext)
  const { cart } = useContext(ProductContext);
  
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  
  const navigate = useNavigate()
  
  const logoutUser = () => {
    logout()
    navigate("/login")
  }

  return (
    <div>
          <Link to = "/">Home</Link>/
          <Link to="/products">Products</Link> / 
      {user ? (
        <>
          <Link to="/cart">
            <Badge count={cart.length}>
              <ShoppingCartOutlined />
            </Badge>{" "}
            /
          </Link>
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