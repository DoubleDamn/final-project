import React, { Component } from 'react';

class Button extends Component {
    constructor() {
      super();
      this.state = {
        message: 'Catch me!',
        style: 'btn btn-success',
      };
    }
  
    updateButton = () => {
      this.setState({
        message: 'You got it!',
        style: 'btn btn-success disabled'
      });
    }
  
    render() {
      return (
        <div>
          <button className={this.state.style } onClick={this.updateButton}>
            {this.state.message}
          </button>
        </div>
      );
    }
  }
  
  export default Button;