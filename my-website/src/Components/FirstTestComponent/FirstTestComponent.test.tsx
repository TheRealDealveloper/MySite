import React from 'react';
import ReactDOM from 'react-dom';
import FirstTestComponent from './FirstTestComponent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FirstTestComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});