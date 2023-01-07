import React from "react";

const Footer = (props) => {
  return (
    <div className="post-info">
      <div className="touchAction"></div>
      <div className="author">{props.author}</div>
      <div className="post-views">{props.postView}</div>
    </div>
  );
};

export default Footer;
