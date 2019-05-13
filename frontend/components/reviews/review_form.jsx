import React from 'react'

export default class ReviewForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user_id: this.props.currentUserId,
      lookout_id: this.props.lookoutId,
      rating: 5,
      description: ''
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(prop){
    return e => this.setState({[prop]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createReview(this.state)
  }

  render(){
    return(
      <div>
        <form>
          <label>Rating:
            <input 
              type="number"
              onChange={this.update('rating')}
              value={this.state.rating} />
          </label>
          <label>Description:
            <textarea 
              value={this.state.description} 
              onChange={this.update('description')} />
          </label>
          <button onClick={this.handleSubmit}>Post Review</button>
        </form>
      </div>
    )
  }
}