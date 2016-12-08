import React from 'react'
import {browserHistory,Link} from 'react-router'
var axios = require('axios')

class SearchResults extends React.Component{
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

    handleSearch(e){
        e.preventDefault();
        alert('this functionality is not working yet')
    }

    render() {
      return (
            <div>
             <div className='row'>
                <form className="navbar-form navbar-left" role="search">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search"/>
                    </div>
                    <button type="submit" className="btn btn-default" onClick={this.handleSearch}>Submit</button>
                </form>
                </div>
         
            <ul className="list-group">
                {this.state.movies.map(movie =>{
                    return <li key={movie.id} className="list-group-item"><Link to={`/movie/${movie.id}`} style={{display:'block',width:'100%',height:'100%}'}}><span></span>{movie.original_title}</Link></li>;
                })}
            </ul>
        </div> 
      )
    }
}

export {SearchResults as default}