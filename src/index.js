import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import ConfigStore from './redux/store';


const ProviderComponent = () => {
  const {store, persistor} = ConfigStore();
  return (
  <Provider store={store}>
  <PersistGate persistor={persistor}>
    <App />
  </PersistGate>
  </Provider>
  )
  }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <React.StrictMode>
    <ProviderComponent />
  </React.StrictMode>
  </Router>
);


