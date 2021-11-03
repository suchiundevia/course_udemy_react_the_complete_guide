import React from "react";
import MyParagragh from "./MyParagraph";

const DemoOutput = (props) => {
  console.log("DEMO OUTPUT Running");
  return <MyParagragh>{props.show ? "New paragraph" : ""}</MyParagragh>;
};

export default React.memo(DemoOutput);
