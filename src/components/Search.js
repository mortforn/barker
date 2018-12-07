import React, {Component} from 'react';

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: ''
    };
  }

  // Fetches dogs passing in input location then redirects to /match view
  handleClick = () => {
    if(!document.querySelector('.search-input').value) {
      return;
    }
    this.props.fetchDogs(
      this.state.location,
      () => this.props.routerProps.history.push('/match')
    );
  }

  // Allows user to submit search via 'Enter' key
  handleEnter = e => {
    if(e.target.value === '') {
      return;
    } else if (e.which === 13) {
      this.handleClick();
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <div className='card' id='homepage-card'>
              <h2 className="display-1">barker.</h2>
              <input
                required
                autoFocus
                className='form-control search-input'
                type="text"
                value={this.state.location}
                onChange={e => this.setState({location: e.target.value})}
                onKeyPress={this.handleEnter}
                placeholder='Search for Single Dogs in your Area' />
              <button className='btn btn-primary' id="search-button" onClick={this.handleClick}>BARK</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
