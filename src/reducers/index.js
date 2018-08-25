import { combineReducers } from "redux";

const event = (state, action) => {
  if (!state) {
    if (localStorage.getItem("event")) {
      state = JSON.parse(localStorage.getItem("event"));
    } else {
      state = [];
    }
  }
  if (action.type === "FORM_SUBMIT") {
    let newState = [
      ...state,
      {
        eventName: action.event_name,
        eventTime: action.event_time,
        eventLocation: action.location,
        eventDate: action.event_date
      }
    ];
    localStorage.setItem("event", JSON.stringify(newState));
    return newState;
  }
  return state;
};

const filter = (state = "SHOW_ALL", action) => {
  switch (action.type) {
    case "SET_FILTER":
      return action.filter;
    default:
      return state;
  }
};

const search = (
  state = {
    time: "",
    date: ""
  },
  action
) => {
  switch (action.type) {
    case "SEARCH_SUBMIT":
      return action.search;
    default:
      return state;
  }
};

export const reducer = combineReducers({ event, filter, search });
