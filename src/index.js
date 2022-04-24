import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/antd.css';
import AppWithContext from "./AppWithContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/*<App />*/}
    <AppWithContext />
  </>
);
