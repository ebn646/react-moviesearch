import React from 'react';
import { browserHistory, Router, Route, Link } from 'react-router'
import Navigation from '../navigation/navigation.js'
require('./movielist.scss');

const axios = require('axios')
const ACTIVE = { color: 'red' }

class MovieList extends React.Component{
    constructor(props){
        super(props)
    }

    componentWillMount(){
        this.state = { movies:[] };
        this.getMovies();
    }

    componentWillReceiveProps(nextProps) {
        var sameQuery = this.props.params.category === nextProps.params.category;
        if(sameQuery)this.getMovies();
    }

    getMovies(){
        var val = this.props.params.category;
        var apiKey = '1cec0394fa447a1f03d7a744faf9cbc9';
        var url = 'https://api.themoviedb.org/3/movie/' + val + '?api_key=' + apiKey+'&language=en-US';
        
        axios.get(url)
        .then((response)=>{
            this.setState({
                movies:response.data.results
            })
        })
        .catch(function(error){
            console.log(error);
        })
    }

    render() {
      return (
            <div>
                <Navigation/>
                <div id="wrapper" >
                     <ul id="scroller" className="list-group">
                        {this.state.movies.map(movie =>{
                            return <li key={movie.id} className="list-group-item"><Link to={`/movie/${movie.id}`} style={{display:'block',width:'100%',height:'100%}'}}><img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width='40px' height='auto'/>{movie.original_title}</Link></li>;
                        })}
                    </ul>
                </div>
        <div className="footer"></div>
        </div> 
      )
    }
}

export {MovieList as default}