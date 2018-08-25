import React, { Component } from "react";
import { connect } from "react-redux";
import Location from "./Location";
import { handleFormSubmit } from "../actions";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      all_day: false
    };
  }

  handleSubmit = e => {
    let obj = {};
    obj = { ...this.state };
    e.preventDefault();
    for (const field in this.refs) {
      obj[field] = this.refs[field].value;
    }
    if (this.state.all_day === true) {
      obj.event_time = "All Day";
    }
    this.props.dispatch(handleFormSubmit(obj));
  };

  getLocation = location => {
    this.setState({ location: location });
  };

  handelCheckBoxChange = () => {
    this.setState({
      all_day: !this.state.all_day
    });
  };

  render() {
    return (
      <div className="col-md-4 jumbotron">
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="form-group">
            Event Name
            <input
              name="event_name"
              ref="event_name"
              type="text"
              className="form-control"
              placeholder="Event Name"
            />
          </div>
          <div className="form-group">
            Event Date
            <input
              name="event_date"
              ref="event_date"
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
                  className="form-control"
                  ref="event_time"
                  name="time"
                />
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            Location
            <Location handleChange={this.getLocation} />
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
