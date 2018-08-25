import React from "react";
import { connect } from "react-redux";

const EventTable = ({ search, filter, event }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="jumbotron text-center">
          <h2>Event List</h2>
          <table className="table table-hover">
            <thead>
              <tr>
                <td>No.</td>
                <td>Event Name</td>
                <td>Event Date</td>
                <td>Event Time</td>
                <td>Event Location</td>
              </tr>
            </thead>
            <tbody>
              {event
                .filter(Event => {
                  let newDate = new Date();
                  let today =
                  newDate.getFullYear() +
                    "-" +
                  (newDate.getMonth() + 1 < 9
                    ? "0" + (newDate.getMonth() + 1)
                    : newDate.getMonth() + 1) +
                    "-" +
                  newDate.getDate();
                  newDate.setDate(newDate.getDate() - 1);
                  let yesterday =
                  newDate.getFullYear() +
                    "-" +
                  (newDate.getMonth() + 1 < 9
                    ? "0" + (newDate.getMonth() + 1)
                    : newDate.getMonth() + 1) +
                    "-" +
                  newDate.getDate();
                  newDate.setDate(newDate.getDate() + 2);
                  let tomorow =
                  newDate.getFullYear() +
                    "-" +
                  (newDate.getMonth() + 1 < 9
                    ? "0" + (newDate.getMonth() + 1)
                    : newDate.getMonth() + 1) +
                    "-" +
                  newDate.getDate();

                  switch (filter) {
                    case "SHOW_ALL":
                      return true;
                    case "TODAY":
                      return Event.eventDate === today;
                    case "YESTERDAY":
                      return Event.eventDate === yesterday;
                    case "TOMOROW":
                      return Event.eventDate === tomorow;
                    default:
                      return true;
                  }
                })
                .filter(Event => {
                  if (search.time !== "" && search.date !== "") {
                    return (
                      (search.time === Event.eventTime ||
                      Event.eventTime === "All Day") &&
                      search.date === Event.eventDate
                    );
                  } else {
                    return true;
                  }
                })
                .map((Event, index) => {
                  return (
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{Event.eventName}</td>
                      <td>{Event.eventDate}</td>
                      <td>{Event.eventTime}</td>
                      <td>{Event.eventLocation}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(EventTable);
