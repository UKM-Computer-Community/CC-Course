import { Routes, Route } from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"

import HomePage from "./pages/HomePage"
import ClassPage from "./pages/ClassPage"
import TestimonialPage from "./pages/TestimonialPage"
import SyaratPage from "./pages/SyaratPage"
import FaqPage from "./pages/FaqPage"
import HTMLClass from "./pages/Class/HTMLClass"

export default function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/class" Component={ClassPage} />
        <Route path="/testi" Component={TestimonialPage} />
        <Route path="/syarat" Component={SyaratPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/html" Component={HTMLClass} />
      </Routes>
      
      <FooterComponent />
    </div>
  )
}
