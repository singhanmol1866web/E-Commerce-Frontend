// import React from 'react'
// import Home from './pages/home/Home'
// import {BrowserRouter, Route, Routes} from "react-router-dom" 
// import Nav from './components/nav/Nav'
// import Footer from './components/Footer/Footer'
// import Shop from './pages/shop/Shop'
// import Cart from './pages/cart/Cart'
// import Contact from './pages/contact/Contact'
// function App() {
//   return (
//     <>
//     <BrowserRouter basename="/E-commerce-">
//     <Nav/>
//     <Routes>
//       <Route path='/' element={<Home/>}/>
//       <Route path='/shop' element={<Shop/>}/>
//       <Route path='/cart' element={<Cart/>}/>
//       <Route path='/contact' element={<Contact/>}/>
//     </Routes>
//     <Footer/>
//     </BrowserRouter>
     
//     </>
//   )
// }

// export default App

import React from 'react'
import Home from './pages/home/Home'
import { HashRouter as Router, Route, Routes } from "react-router-dom"
import Nav from './components/nav/Nav'
import Footer from './components/Footer/Footer'
import Shop from './pages/shop/Shop'
import Cart from './pages/cart/Cart'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App