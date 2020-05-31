import React from 'react';
import logo from './logo.svg';
import './App.css';

const FETCH_API = `http://localhost:8000/blog/crawl_blogs/`

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      contentTable: "",
      result: ""
    }
  }

  handleInputChange = (event) => {
    this.setState({
      query: event.target.value.toLowerCase()
    });
  }

  handleButtonClick = (event) => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Basic YWJoaXNoZWs6MTIzNDVhc2Rm");
    const requestOptions = {
      method: "POST",
      headers: myHeaders
    };
    const FETCH_API_WITH_QUERY = `${FETCH_API}${this.state.query}/`

    fetch(FETCH_API_WITH_QUERY, requestOptions)
      .then(response => response.text())
      .then(result => {
        if(result.status === 200) {
          this.setState({
            result,
            response: result.status
          })
        }
      })
      .catch(error => console.log('error', error));
  }

  render() {
    const contentTable = {
      display: this.state.response === 200 ? "block" : "none"
    };

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Search for Medium Blogs based on <i>tags</i>
          </p>
          <input
            placeholder="Search for..."
            value={this.state.query}
            onChange={this.handleInputChange}
          />
          <button type="button" onClick={this.handleButtonClick}>Search Blogs</button>

          <div style={contentTable}>
            {this.state.result}
          </div>

        </header>
      </div>
    );
  }
}

export default App;