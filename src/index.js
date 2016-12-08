import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, IndexRoute, Link, withRouter } from 'react-router'
import App from './components/app.js'
import Home from './components/home/home.js'
import Movie from './components/movie.js'
import SearchResults from './components/searchResults.js'
import './styles/app.scss'

render((
  <Router history={browserHistory}>
    <Route path={"/"} component={App}>
    <IndexRoute component={Home}/>
       <Route path="movie/:id" component={Movie}/>
       <Route path="search/:query=fight+club" component={SearchResults}/>
    </Route>
  </Router>
), document.getElementById('main'))





