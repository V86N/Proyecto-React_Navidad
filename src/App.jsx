import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Products from './components/Products/Products'
import { ProductProvider } from './context/ProductContext/ProductState'
import Register from './components/Register/Register'
import Header from './components/Header/Header'
import { UserProvider } from './context/UserContext/UserState'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Cart from './components/Cart/Cart'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'


function App() {


  return (

    <div>
      <ProductProvider>
        <UserProvider> 
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} /> 
              <Route path="/products" element={<Products />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
            <Footer/>
          </BrowserRouter>
        </UserProvider>
      </ProductProvider>

    </div>

  )
}

export default App
