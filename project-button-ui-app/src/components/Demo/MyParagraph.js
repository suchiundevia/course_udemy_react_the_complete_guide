import React from "react";

const MyParagragh = (props) => {
  console.log("MY PARAGRAPH Running");
  return <p>{props.children}</p>;
};

export default MyParagragh;
