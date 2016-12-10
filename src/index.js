import React from 'react'
import { render } from 'react-dom'
import { browserHistory, hashHistory,Router, Route, IndexRoute, Link, withRouter } from 'react-router'
import App from './components/app/app.js'
import Home from './components/home/home.js'
import Movie from './components/movie/movie.js'
import MovieList from './components/movielist/movielist.js'
import SearchResults from './components/searchResults/searchResults.js'
import './styles/app.scss'

render((
  <Router history={hashHistory}>
    <Route path={"/"} component={App}>
    <IndexRoute component={Home}/>
       <Route path="category/:category" component={MovieList}/>
       <Route path="movie/:id" component={Movie}/>
       <Route path="search/:query=fight+club" component={SearchResults}/>
    </Route>
  </Router>
), document.getElementById('main'))





