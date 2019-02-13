import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };

  // to update our state object, we call setState
  // never make direct assignment to the state object
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  // React requires that a dev define render
  // for a better user experience, conditional statements will be used
  // to return different content, depending on the senario
  render() {
    // if there is latitude data and no error = show latitude
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    // if no latitude and there is an error message = show error
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    // *if no latitude and no error message = show "loading!"
    // *instead of building if/else conditional statements, conditional rendering
    //  is utilized.
    // *returning different JSX depending upon the state or the props of component
    return <Spinner message="I'm trying to get your location info..." />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

// Some things to remember about State

// *'State' is a JS object that contains data relevant to a component
// *Updating 'state' on a component causes the component to (almost)
// instantly rerender
// *State must be initialized when a component is created
// *state can only be updated using the function 'setState'
