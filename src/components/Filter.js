import React from "react";
import { connect } from "react-redux";
import { Filters, setFilter } from "./../actions";

const Filter = ({ currentFilter, dispatch }) => {
  return (
    <div className="jumbotron">
      <h2>Filters</h2>
      {Object.keys(Filters).map((filter, index) => {
        return (
          <div key={filter + index} className="radio">
            <input
              type="radio"
              value={filter}
              checked={currentFilter === filter}
              onClick={event => {
                dispatch(setFilter(event.target.value));
              }}
            />
            {filter}
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return { currentFilter: state.filter };
};

export default connect(mapStateToProps)(Filter);
