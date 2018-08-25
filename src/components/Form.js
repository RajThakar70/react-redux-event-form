import React, { Component } from "react";
import { connect } from "react-redux";
import Location from "./Location";
import { handleFormSubmit } from "../actions";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all_day: false,
      event_name: "",
      event_date: "",
      event_time: "",
      location: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    let tempObject = {};
    for (let field in this.state) {
      tempObject[field] = this.state[field];
    }
    if (this.state.all_day === true) {
      tempObject.event_time = "All Day";
    }
    this.props.dispatch(handleFormSubmit(tempObject));
    this.setState({
      all_day: false,
      event_name: "",
      event_date: "",
      event_time: "",
      location: ""
    });
  };

  getLocation = location => {
    this.setState({ location: location });
  };

  handleChange = event => {
    let obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };

  handelCheckBoxChange = () => {
    this.setState({
      all_day: !this.state.all_day
    });
  };

  render() {
    return (
      <div className="col-md-4 jumbotron">
        <h2>Create Event</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="form-group">
            Event Name
            <input
              name="event_name"
              onChange={e => this.handleChange(e)}
              value={this.state.event_name}
              type="text"
              className="form-control"
              placeholder="Event Name"
            />
          </div>
          <div className="form-group">
            Event Date
            <input
              name="event_date"
              onChange={e => this.handleChange(e)}
              value={this.state.event_date}
              className="form-control"
              type="date"
              placeholder="Event Date"
            />
          </div>
          <div className="row">
            <div className="col-md-6 text-center">
              <input
                name="all_day"
                onClick={this.handelCheckBoxChange}
                checked={this.state.all_day}
                id="All Day"
                component="input"
                type="checkbox"
              />{" "}
              All Day
            </div>
            {!this.state.all_day ? (
              <div className="form-group col-md-6">
                Time
                <input
                  type="time"
                  onChange={e => this.handleChange(e)}
                  value={this.state.event_time}
                  className="form-control"
                  name="event_time"
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            Location
            <Location
              address={this.state.location}
              handleChange={this.getLocation}
            />
          </div>
          <div>
            <button className="btn btn-primary btn-block" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect()(Form);
