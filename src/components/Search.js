import React, {Component} from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: '',

    };
  }

  handleClick = () => {
    this.props.fetchDogs(
      this.state.location,
      () => this.props.routerProps.history.push('/match')
    );
  }

  handleEnter = e => {
    if (e.which === 13) {
      this.handleClick();
    }
  }


  render() {
    return (
      <div className="container container-fluid">
        <div className='card' id='homepage-card'>
          <h2 className="display-1">barker.</h2>
          <input required autoFocus className='form-control'type="text" value={this.state.location} onChange={e => this.setState({location: e.target.value})} onKeyPress={this.handleEnter} placeholder='Search for Single Dogs in your Area' />
          <button className='btn btn-primary' id="search-button" onClick={this.handleClick}>BARK</button>
        </div>
      </div>
    );
  }
}

export default Search;
