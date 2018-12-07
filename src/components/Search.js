import React, {Component} from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    };
  }

  handleClick = () => {
    this.props.fetchDogs(
      this.state.location,
      () => this.props.routerProps.history.push('/match')
    );
  }

  render() {
    return (
      <div className="container container-fluid">
        <div className='card' id='homepage-card'>
          <h2 className="display-1">barker.</h2>
          <input className='form-control'type="text" value={this.state.location} onChange={e => this.setState({location: e.target.value})} placeholder='Search for Single Dogs in your Area' />
          <button className='btn btn-primary' id="search-button" onClick={this.handleClick}>BARK</button>
        </div>
      </div>
    );
  }
}

export default Search;
