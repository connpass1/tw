import React from 'react'
import ReactDOM from 'react-dom/client'
import configureStore from './store'
import { Provider } from 'react-redux';
import reportWebVitals from "./reportWebVitals";
import 'leaflet/dist/leaflet.css';
import "./index.css"
import App from "./App";
const store = configureStore()
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode><Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>
);
reportWebVitals();
