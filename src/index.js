import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';

import App from './components/app/App';
import { Provider } from 'react-redux';
import store from './store';

//Корневой компонент приложения. Содержит в себе провайдер redux

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


