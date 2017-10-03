'user strict';
import React from 'react';
import ReactDOM from 'react-dom';
import A from 'a'

ReactDOM.render(<A/>, document.getElementById('hello'))

var context = require.context("react", true, /\.js$/);

if (module.hot) {
  module.hot.accept(context.id, function () {
    //You can't use context here. You _need_ to call require.context again to
    //get the new version. Otherwise you might get errors about using disposed
    //modules
    var reloadedContext = require.context("react", true, /\.js$/);
    //To find out what module was changed you just compare the result of the
    //require call with the version stored in the modules hash using strict
    //equality. Equal means it is unchanged.
    ReactDOM.render(<A/>, document.getElementById('hello'))
  });
}
