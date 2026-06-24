import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTopButton'
import { Toaster } from 'react-hot-toast';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Nav/>
      <Home />
      <ScrollToTopButton />
      <Footer />
    </>
  )
}

export default App
