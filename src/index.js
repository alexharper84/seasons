import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);

    // THE ONLY SITUATION to make a direct assignment to this.state
    // is inside the constructor function
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // to update our state object, we call setState
        // never make direct assignment to the state object
        this.setState({ lat: position.coords.latitude });
      },

      err => console.log(err)
    );
  }
  // React requires that a dev define render
  render() {
    return <div>Latitude: {this.state.lat} </div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

// Some things to remember about State

// *'State' is a JS object that contains data relevant to a component
// *Updating 'state' on a component causes the component to (almost)
// instantly rerender
// *State must be initialized when a component is created
// *state can only be updated using the function 'setState'
