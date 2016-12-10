import React from 'react';
require('./app.scss');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {test: 'dummy'};
  }
  render(){
        return(
            <div className='container'>
                <div className='row'>
                    {this.props.children}
                </div>
            </div>
        )
    }
}
