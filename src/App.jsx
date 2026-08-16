import Header from './components/header/header'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './routes/home/Home'
import About from './routes/about/About'
import Services from './routes/Services/Services'
import Contact from './routes/contact/Contact'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>



      <Footer />
    </div>
  )
}

export default App