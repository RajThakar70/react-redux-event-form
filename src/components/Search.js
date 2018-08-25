import React from "react";
import { connect } from "react-redux";
import { handleFormSearch } from "../actions";

const Search = ({ dispatch }) => {
  return (
    <div className="row jumbotron">
      <div className="col-md-12">
        <form
          onSubmit={e => {
            e.preventDefault();
            let date = e.target["date"].value;
            let time = e.target["time"].value;
            dispatch(
              handleFormSearch({
                time: time,
                date: date
              })
            );
          }}
        >
          <div className="form-group">
            Time
            <input className="form-control" type="time" name="time" />
          </div>
          <div className="form-group">
            Event Date
            <input
              className="form-control"
              name="date"
              type="date"
              placeholder="Event Date"
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
          onClick={() => {
            dispatch(
              handleFormSearch({
                time: "",
                date: ""
              })
            );
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default connect()(Search);
