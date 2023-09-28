import React, { Component } from 'react';
import "./Counter.css";
class SubstringCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      N: 0,
      S: '',
      result: 0,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  countSubstrings = () => {
    const { N, S } = this.state;
    let count = 0;

    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j <= N; j++) {
        const substring = S.slice(i, j);
        if (substring[0] !== substring[substring.length - 1]) {
          count++;
        }
      }
    }

    this.setState({ result: count });
  }

  render() {
    return (
      <div>
        <h1>Substring Counter</h1>
        <div>
          <label htmlFor="N">N:</label>
          <input
            type="number"
            name="N"
            value={this.state.N}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="S">S:</label>
          <input
            type="text"
            name="S"
            value={this.state.S}
            onChange={this.handleInputChange}
          />
        </div>
        <button onClick={this.countSubstrings}>Count Substrings</button>
        <div>
          <p>Result: {this.state.result}</p>
        </div>
      </div>
    );
  }
}

export default SubstringCounter;
