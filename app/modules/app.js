'user strict';
import React from 'react';
import ReactDOM from 'react-dom';
import A from 'a'

ReactDOM.render(<A/>, document.getElementById('hello'))
var context = require.context("react", true, /\.js$/);
if (module.hot) {
  module.hot.accept(context.id, function () {
    var reloadedContext = require.context("react", true, /\.js$/);
    ReactDOM.render(<A/>, document.getElementById('hello'))
  });
}
