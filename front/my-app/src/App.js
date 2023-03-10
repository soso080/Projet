import logo from './logo.svg';
import './App.css';
import NavBar from './component/Navbar/Navbar';
import Main from './component/Main/Main';
import Footer from './component/Footer/Footer';

export function App() {
  return (
    <div className="App">
      <NavBar/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
