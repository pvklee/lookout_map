import React from 'react'

export default class FilterForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      lookout_type: 'All'
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.props.updateFilter(this.state.lookout_type, 'lookout_type');
  }

  handleChange(e){
    this.setState({lookout_type: e.target.value})
    this.props.updateFilter(e.target.value, 'lookout_type');
  }
  
  render(){
    return(
      <div>
        <form>
          <select
            value={this.state.lookout_type}
            onChange={this.handleChange}
          >
            <option value='All' key = {-1}>All</option>
            {LOOKOUT_TYPES.map((type, i) => {
              return <option value={type} key={i}>{type}</option>;
            })}
          </select>
        </form>
      </div>
    )
  }
}