import React from "react";

const Heading = (props) => {
  return (
    <div className="panel-heading">
      <h2 className="entry-title">
        <a href="#0" tabindex="-1" hidefocus="true">
          {props.haeding}
        </a>
      </h2>
    </div>
  );
};

export default Heading;
