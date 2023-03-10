import logo from './logo.svg';
import './App.css';
import NavBar from './component/Navbar/Navbar';
import Main from './component/Main/Main';
import Footer from './component/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
