import './App.css';
import { GetProductsProvider } from './components/context/useGetInfoContext';
import GetRoutes from './routes';

function App() {
  return (
    <div className="App">
      <GetProductsProvider>
        <GetRoutes />
      </GetProductsProvider>
    </div>
  );
}

export default App;
