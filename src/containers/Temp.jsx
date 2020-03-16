import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Temp extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    num: 0
  };

  handleClick = () => {
    this.setState({num: 1});
    this.setState((state) => {console.log('state', state); return {num: 2}});
  };

  render() {
    return (
      <div onClick={this.handleClick}>Click</div>
    );
  }
}

export default Temp;
