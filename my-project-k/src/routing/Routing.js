import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import AboutPage from '../components/AboutPage'
import Contact from '../components/Contact'
import Cart from '../components/Cart'
import Product from '../components/Product'
import Searchitem from '../components/Searchitem'
import Home from '../components/Home'
const Routing = () => {
  return (
    <div>
        <BrowserRouter>
    <Header></Header>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='loginpage' element={<Login/>}></Route>
        <Route path='myregform-page' element={<SignUp/>}></Route>
        <Route path='aboutpage' element={<AboutPage/>}></Route>
        <Route path='contactpage' element={<Contact/>}></Route>
        <Route path='cartpage' element={<Cart/>}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="/search/:term" element={<Searchitem />}></Route>
     
      {/* <Route path="cart" element={<Cart />}></Route>  */}
        
        </Routes>
        <Footer></Footer>
    </BrowserRouter>
    </div>
  )
}

export default Routing