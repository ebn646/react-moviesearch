import React from 'react'
import {browserHistory,Link} from 'react-router'
import YouTube from 'react-youtube'
var axios = require('axios');

class Movie extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            movieInfo: new Object(),
            videoId: '',
            player: null,
        };

        this.onReady = this.onReady.bind(this);
        this.onChangeVideo = this.onChangeVideo.bind(this);
        this.onPlayVideo = this.onPlayVideo.bind(this);
        this.onPauseVideo = this.onPauseVideo.bind(this);
    }

    componentDidMount(){
        var val = this.props.params.id;
        var apiKey = '1cec0394fa447a1f03d7a744faf9cbc9';
        var url = 'https://api.themoviedb.org/3/movie/' + val + '?api_key=' + apiKey+'&append_to_response=similar,videos,credits';

        axios.get(url)
        .then((response)=>{
            console.log(response.data.videos.results[0])
            this.setState({
                movieInfo:response.data,
                videoId: response.data.videos.results[0].key,
            })
        })
        .catch(function(error){
            console.log(error);
        })
    }

    onReady(event) {
        console.log(`YouTube Player object for videoId: "${this.state.videoId}" has been saved to state.`); // eslint-disable-line
        this.setState({
        player: event.target,
        });
    }

    onPlayVideo() {
        this.state.player.playVideo();
    }

    onPauseVideo() {
        this.state.player.pauseVideo();
    }

    onChangeVideo() {
        this.setState({
        videoId: this.state.videoId === videoIdA ? videoIdB : videoIdA,
        });
    }
    render(){
        return(
            <div>
                <div className="panel panel-default "> 
                <div className="panel-heading header"><Link to={'/'}>HOME</Link></div> 
                    <div className="jumbotron">
                        <div className="container">
                            <img src={`https://image.tmdb.org/t/p/original${this.state.movieInfo.backdrop_path}`} width='100%' height='100%'/>
                        </div>
                        <div className="page-header">
                            <h3>{this.state.movieInfo.original_title}</h3>
                            <small>{this.state.movieInfo.overview}</small>
                        </div>
                        <div className="bs-example" data-example-id="responsive-embed-16by9-iframe-youtube"> 
                            <div className="embed-responsive embed-responsive-16by9"> 
                                <YouTube videoId={this.state.videoId} onReady={this.onReady} />
                            </div> 
                        </div>
                    </div>
                    <div className="footer"></div>
                </div>
            </div>
        )
    }
}

export { Movie as default };
