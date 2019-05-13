import React from 'react'
import {Link} from 'react-router-dom'

export default class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state)
    this.props.processForm(user)
      .then(() => this.props.history.push('/'));
  }

  update(prop){
    return e => this.setState({[prop]: e.target.value})
  }

  render(){
    const {errors, formType} = this.props;

    const buttonValue = (formType == 'login') ? 'Log In' : 'Sign Up';
    const linkTo = (formType == 'login') ? '/signup' : '/login';
    const linkText = (formType == 'login') ? 'Sign Up' : 'Log In';

    const errorMessages = errors.map(error => <li key={error}>{error}</li>);

    return(
      <div class="session-form-outer-container">
        <div class="session-form-inner-container">
          <div>
            <ul>{errorMessages}</ul>
          </div>
          <form class="session-form">
            <input 
              type='text'
              value={this.state.username}
              onChange={this.update('username')}
              placeholder='username' />
            <br/>
            <input 
              type='password'
              value={this.state.password}
              onChange={this.update('password')}
              placeholder='password' />
            <br/>
            <button onClick={this.handleSubmit}>{buttonValue}</button>
          </form>
          <Link to={linkTo}>{linkText}</Link>
        </div>    
      </div>


    )
  }
}