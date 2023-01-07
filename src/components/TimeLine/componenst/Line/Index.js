import React from "react";
import Body from "./components/Body";
import Footer from "./components/Footer";

import Heading from "./components/Heading";

const CardTimeLine = (props) => {
  return (
    <div className="col-xs-8 col-sm-9 col-md-9">
      <div className="hentry-box">
        <div className="panel panel-default">
          <Heading haeding={props.haeding} />
          <Body />
          <Footer postView={props.postView} author={props.author} />
        </div>
      </div>
    </div>
  );
};

export default CardTimeLine;
