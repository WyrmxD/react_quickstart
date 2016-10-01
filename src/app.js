import React from 'react';
import ReactDOM from 'react-dom';
import Content from './content';

window.onload = function(){

  ReactDOM.render(<Content />, document.getElementById('app'));
}