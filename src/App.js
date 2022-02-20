import logo from './logo.svg';
import './App.css';
import Login from './pages/login/Login';
import Navbar from './components/layouts/Navbar';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Login />
      <Footer />
    </>
  );
}

export default App;
