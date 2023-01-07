import React from "react";

import Date from "./componenst/Line/components/Date";
import CardTimeLine from "./componenst/Line/Index";

const TimeLine = (props) => {
  return (
    <li className="animated fadeInUp">
      <div className="hentry">
        <Date date={props.date} />
        <div className="row">
          <div className="col-xs-4 col-sm-3 col-md-3 pull-thumb">
            <figure className="well" style={{ padding: "5px" }}>
              <img
                className="img-rounded img-home img-responsive attachment-post-thumbnail post-image"
                width="150"
                height="150"
                src="http://cdn.macrumors.com/article-new/2016/10/SJ-death-200x200.jpg"
                alt=""
              />
            </figure>
          </div>
          <CardTimeLine
            author={props.author}
            haeding={props.haeding}
            postView={props.postView}
          />
        </div>
      </div>
    </li>
  );
};

export default TimeLine;
