import logo from './logo.svg';
import './App.css';
// import { Navigation } from '@mui/icons-material';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/Navigation/HomeCarousel/pages/HomePage/HomePage';
import AliceCarousel from 'react-alice-carousel';
import Footer from './components/Footer/Footer';
import Product from './components/Product/Product';

function App() {
  return (
    <>
      <div className="App">

        <Navigation />

        <div>
          <HomePage /> 

          <Product/>
        </div>

        <div>
          <Footer />
        </div>

      </div>
    </>
  );
}
export default App;