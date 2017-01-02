var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Load foundation
$(document).foundation();

// APP css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>Boilerplate</p>,
  document.getElementById('app')
);
