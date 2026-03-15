import { Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Reviews from "./pages/reviews/reviews"
import Privacy from "./pages/privacy/Privacy"
import Cookies from "./pages/cookies/Cookies"
import Terms from "./pages/terms/Terms"

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/privacy" element={<Privacy/>} />
        <Route path="/cookies" element={<Cookies/>} />
        <Route path="/terms" element={<Terms/>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App