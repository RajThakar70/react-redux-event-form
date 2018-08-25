import React, { Component } from "react";
import { connect } from "react-redux";
import { handleFormSearch } from "../actions";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      time: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.dispatch(handleFormSearch(this.state));
  };

  handleClearForm = () => {
    this.props.dispatch(
      handleFormSearch({
        date: "",
        time: ""
      })
    );
    this.setState({
      date: "",
      time: ""
    });
  };

  handleChange = event => {
    let obj = {};
    obj[event.target.name] = event.target.value;
    this.setState(obj);
  };

  render() {
    return (
      <div className="row jumbotron">
        <h2>Search Event</h2>
        <div className="col-md-12">
          <form onSubmit={e => this.handleSubmit(e)}>
            <div className="form-group">
              Time
              <input
                className="form-control"
                type="time"
                name="time"
                onChange={e => this.handleChange(e)}
                value={this.state.time}
              />
            </div>
            <div className="form-group">
              Event Date
              <input
                className="form-control"
                name="date"
                type="date"
                onChange={e => this.handleChange(e)}
                value={this.state.date}
              />
            </div>
            <button className="btn btn-primary btn-block" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="col-md-12">
          <button
            className="btn btn-danger btn-block"
            onClick={this.handleClearForm}
          >
            Clear
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(Search);
