export const handleFormSubmit = formData => {
  return {
    type: "FORM_SUBMIT",
    ...formData
  };
};

export const handleFormSearch = search => {
  return {
    type: "SEARCH_SUBMIT",
    search: search
  };
};

export const setFilter = filter => {
  return {
    type: "SET_FILTER",
    filter: filter
  };
};

export const Filters = {
  "SHOW ALL": "SHOW ALL",
  YESTERDAY: "YESTERDAY",
  TODAY: "TODAY",
  TOMOROW: "TOMOROW"
};
