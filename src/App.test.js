import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import LoginButton from './LoginBtn';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.render(<LoginButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});
