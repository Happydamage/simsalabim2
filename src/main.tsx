import { createContext, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import Store from './store/store.ts';
import { ToastContainer } from 'react-toastify';

interface State {
  store: Store;
}

const store = new Store();

export const Context = createContext<State>({
  store,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Context.Provider value={{ store }}>
      <App />
      <ToastContainer />
    </Context.Provider>
  </StrictMode>
);
