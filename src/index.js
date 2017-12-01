import React from 'react';
import ReactDOM from 'react-dom';
import { createRenderer } from 'fela'
import { Provider as FelaProvider } from 'react-fela'
import App from './App';
import './index.css';

const renderer = createRenderer();

ReactDOM.render(
  <FelaProvider renderer={renderer}>
    <App />
  </FelaProvider>,
  document.getElementById('root')
);
