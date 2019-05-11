import React from 'react'

export default class LookoutForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng,
      description: '',
      lookout_type: ''
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(prop){
    return e => this.setState({[prop]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createLookout(this.state)
      .then(data => this.props.history.push(`/`));
  }

  render(){
    return(
      <div>
        <form>
          <label>Latitude:
            <input 
              type="text"
              value={this.props.lat}
              disabled />
          </label>
          <label>Longitude:
            <input 
              type="text"
              value={this.props.lng}
              disabled />
          </label>
          <label>Description:
            <input 
              type="text"
              value={this.state.description} 
              onChange={this.update('description')}/>
          </label>
          <label>Type:
            <input 
              type="text"
              value={this.state.lookout_type} 
              onChange={this.update('lookout_type')}/>
          </label>
          <button onClick={this.handleSubmit}>Create</button>
        </form>
      </div>
    )
  }
}