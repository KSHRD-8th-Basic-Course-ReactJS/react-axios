import React from "react";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
    };
  }
  componentDidMount() {
    Axios.get(process.env.REACT_APP_API_KEY).then((result) => {
      console.log(result.data)
      this.setState({ results: result.data });
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.results.map((result) => {
          return <p>{result.title}</p>;
        })}
      </div>
    );
  }
}

export default App;
