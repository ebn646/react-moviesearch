import React from 'react'
import {browserHistory,Link} from 'react-router'

import Navigation from '../navigation/navigation.js'

require('./home.scss');

const axios = require('axios')

class Home extends React.Component{
    constructor({ params: { category }, location: { query } }){
        console.log('home')
        super();
        this.state = { movies:[] };

    }

    componentWillMount(){
        var url = "https://api.themoviedb.org/3/movie/now_playing?api_key=1cec0394fa447a1f03d7a744faf9cbc9&language=en-US";
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

    componentDidMount(){
       
    }

    handleClick(e){
     
    }

    render() {
      return (
            <div>
                <Navigation/>
                <div id="wrapper" >
                     <ol id="scroller" className="list-group">
                        {this.state.movies.map(movie =>{
                            return <li key={movie.id} className="list-group-item"><Link to={`/movie/${movie.id}`} style={{display:'block',width:'100%',height:'100%}'}}><img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width='40px' height='auto'/>{movie.original_title}</Link></li>;
                        })}
                    </ol>
                </div>
        <div className="footer"></div>
        </div> 
      )
    }
}

export {Home as default}