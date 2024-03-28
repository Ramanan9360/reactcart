
import About from './About';
import './App.css';
import Dashboard from './Dashboard';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Cart from './Cart';
import Login from './Login';
import Register from './Register';
import './App.css';
import { CartProvider } from 'react-use-cart';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/order" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter></CartProvider>

    </div>
  );
}

export default App;
