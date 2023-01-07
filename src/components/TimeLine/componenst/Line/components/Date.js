import React from "react";

const Date = (props) => {
  return (
    <>
      <span className="entry-date hidden-xs">
        <span className="entry-meta-date">
          <time>{props.date}</time>
        </span>
      </span>
    </>
  );
};

export default Date;
