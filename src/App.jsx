import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Navbar />
      <Home />
      <ScrollToTopButton />
      <Footer />
    </>
  )
}

export default App
