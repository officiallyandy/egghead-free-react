import React from 'react';
import ReactDOM from 'react-dom';
import App from './mountComponent';

ReactDOM.render(
  <App cat={3} />,
  document.getElementById('root')
);
