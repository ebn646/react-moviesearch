import React from 'react'
import {Link} from 'react-router'

const ACTIVE = { color: 'red' }

class Navigation extends React.Component{
    render(){
        return(
            <div className="bs-example header" data-example-id="simple-button-group"> 
                    <div className="btn-group" role="group" aria-label="Basic example"> 
                        <button type="button" className="btn btn-default"><Link to={`/category/now_playing`}activeStyle={ACTIVE}>Now Playing</Link></button> 
                        <button type="button" className="btn btn-default"><Link to={`/category/popular`}activeStyle={ACTIVE}>Popular</Link></button> 
                        <button type="button" className="btn btn-default"><Link to={`/category/upcoming`}activeStyle={ACTIVE}>Coming Soon</Link></button> 
                    </div> 
            </div>
        )
    }
}

export {Navigation as default}