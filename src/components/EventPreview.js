import React from "react";
import Search from "./Search";
import Filter from "./Filter";

const EventPreview = () => {
  return (
    <div className="col-md-8">
      <div className="col-md-8">
        <Search />
      </div>
      <div className="col-md-4">
        <Filter />
      </div>
    </div>
  );
};

export default EventPreview;
