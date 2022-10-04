import './App.css';
import Header from './components/Header';
import {useState, useEffect} from 'react';
import products from './products.json';
import Product from './components/Product';
import Basket from './components/Basket';

function App() {

  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
   setTotal (basket.reduce((acc, item) => {
      return acc + (item.amount * (products.find(product => product.id === item.id).price))
    }, 0))

  }, [basket])

  const resetBasket = () => {
    setBasket([])
  }
  return (
    <>
      <Header total= {total} money= {money}/>
      {products.map(product => (
        <Product key={product.id} total= {total} money= {money} basket= {basket} setBasket= {setBasket} product={product}/>
      ))}
      <Basket basket={basket}/>
      <button onClick={resetBasket}>Sıfırla</button>
    </>
  );
}

export default App;
