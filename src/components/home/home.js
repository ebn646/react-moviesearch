import React from 'react'
import {browserHistory,Link} from 'react-router'

import Navigation from '../navigation/navigation.js'
import MovieList from '../movielist/movielist.js'

require('./home.scss');

const axios = require('axios')

class Home extends React.Component{
    constructor(){
        console.log('home')
        super();
        window.location.replace('http://'+window.location.host+'/#/category/now_playing')
    }

    render() {
      return (
        <div>
                
        </div> 
      )
    }
}

export {Home as default}