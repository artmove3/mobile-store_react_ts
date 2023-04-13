import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StoreState } from './context/StoreContext';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <StoreState>
    <App />
  </StoreState>
)