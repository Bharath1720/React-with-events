
import './App.css';
import FormsBinding from './compoenets/FormsBinding';
import GreetingMessage from './compoenets/GreetingMessage';
import GreetingMessageTwo from './compoenets/GreetingMessageTwo';
import ProductItem from './compoenets/ProductItem';
import WishMessage from './compoenets/WishMessage';

function App() {
  return (
    <div className="App">
      <nav className='navbar navbar-dark bg-dark navbar-expand-sm'>
        <a href='/'>React with Events</a>
      </nav>
      <WishMessage/>
      <GreetingMessage/>
      <GreetingMessageTwo/>
      <ProductItem/>
      <FormsBinding/>
    </div>
  );
}

export default App;
