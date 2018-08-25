import React, { Component } from "react";
import Form from "./components/Form";
import EventPreview from "./components/EventPreview";
import EventTable from "./components/EventTable";

class App extends Component {
  render() {
    return (
      <div className="container">
        <header className="text-center">
          <h1 className="App-title">Event Form</h1>
        </header>
        <div className="row">
          <Form />
          <EventPreview />
        </div>
        <div className="row">
          <EventTable />
        </div>
      </div>
    );
  }
}

export default App;
