import React, { Component } from 'react';
import './TrailerCard.css';
import { getSelectedTrailer } from './apiCalls'
 
class TrailerCard extends Component {
      constructor(props) {
        super(props);
        this.state = {
          selectedTrailer = '',
          errorMessage: '',
        };
      };
    
      componentDidMount = () => {
        getSelectedTrailer(this.props.id)
        .then(data => {
          this.setState({
           selectedTrailer: data.videos 
          })
        })
        .catch(error => {
          console.log(error);
          this.setState({
            errorMessage: error
          })
        })
      };
  
  render() {
      return (
        
      );
    };
  };

// onClick we load the display infoPage,
// 

  export default TrailerCard;