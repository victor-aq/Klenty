import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Navigation/Navbar';
import Header from './Header/Header';
import Mid from'./Middle/Mid';
import Footer from './Footer/Footer';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Header/>
    <Mid/>
    <Footer/>
    </div>
  );
}

export default App;
