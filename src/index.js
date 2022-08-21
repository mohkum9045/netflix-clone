import React from "react";
import ReactDOM from "react-dom";
import Main from "./main";
import sdata from "./data";
function ncard(val){
  return (
      <Main
        sname={val.sname}
        title={val.title}
        imgsrc={val.imgsrc}
        link={val.imgsrc}
      />
  )
}

ReactDOM.render(
  <>
    {sdata.map(ncard)}
  </>
  ,document.getElementById("root")
)