import React from 'react'
require('../../../libs/iscroll.js');

require('../../styles/app.scss');

import {browserHistory,Link} from 'react-router'
var axios = require('axios')

class Home extends React.Component{
    constructor(){
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
     var url = "https://api.themoviedb.org/3/movie/popular?api_key=1cec0394fa447a1f03d7a744faf9cbc9&language=en-US";
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
                <div className="bs-example header" data-example-id="simple-button-group"> 
                    <div className="btn-group" role="group" aria-label="Basic example"> 
                        <button type="button" className="btn btn-default" onClick={this.handleClick}>Now Playing</button> 
                        <button type="button" className="btn btn-default" onClick={this.handleClick}>Popular</button> 
                        <button type="button" className="btn btn-default" onClick={this.handleClick}>Top Rated</button> 
                    </div> 
                </div>
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