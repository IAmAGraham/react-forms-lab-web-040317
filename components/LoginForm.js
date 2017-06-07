import React from 'react';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onSubmit = false;
    this.state = {
      username:'',
      password:''
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const username = this.state.username
    const password = this.state.password
    if (!this.state.username || !this.state.password) { return }
      this.props.onSubmit( {username, password} )
  }

  handleInputChange(name, event) {
    this.setState({
      [name]: event.target.value
    });
  }


  render() {
    // const notValid = this.state.username.length > 0 || this.state.password.length > 0
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input name="username" onChange={this.handleInputChange.bind(this, 'username')} value={this.state.username} id="test-username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input name="password" onChange={this.handleInputChange.bind(this, 'password')} value={this.state.password} id="test-password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}
