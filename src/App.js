import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import ProductList from './components/productList/ProductList';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
     <Header/>
     <ProductList/>
     <Footer/>
    </div>
  );
}

export default App;
