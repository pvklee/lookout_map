import React from 'react'

export default class LookoutForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lat: this.props.lat,
      lng: this.props.lng,
      description: '',
      lookout_type: 'Easy',
      imageUrl: '',
      imageFile: ''
    };
    this.update = this.update.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(prop){
    return e => this.setState({[prop]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    const formData = new FormData();
    formData.append('lookout[lat]', this.state.lat);
    formData.append('lookout[lng]', this.state.lng);
    formData.append('lookout[description]', this.state.description);
    formData.append('lookout[lookout_type]', this.state.lookout_type);

    if (this.state.imageFile) {
      formData.append('lookout[photo]', this.state.imageFile);
    }

    this.props.createLookout(formData)
      .then(data => this.props.history.push(`/`));
  }

  updateFile(e){
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imageUrl: reader.result, imageFile: file});

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
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
            <select
              value={this.state.lookout_type}
              onChange={this.update('lookout_type')}
            >
              {LOOKOUT_TYPES.map((type, i) => {
                return <option value={type} key={i}>{type}</option>;
              })}
            </select>
          </label>
          <label>Image:
            <input
              type="file"
              onChange={this.updateFile}
            />
          </label>
          <img src={this.state.imageUrl} alt="upload a pic!"></img>
          <button onClick={this.handleSubmit}>Create</button>
        </form>
      </div>
    )
  }
}