import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      value:'',
    };
  }

  handleChange(event){
    this.setState({
      value:event.target.value,
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text"
        onChange={this.handleChange} value={this.state.value}/>
        <span>{this.props.maxChars - this.state.value.length} </span>
      </div>
    );
  }
}

TwitterMessage.defaultProps = {
  maxChars: 140,
}

TwitterMessage.propTypes = {
  maxChars: React.PropTypes.number
}
