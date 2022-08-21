import React from "react";

function Main(pros) {
return(
    <>
    <div className="cards">
      <div className="card">    
        <img src={pros.imgsrc} alt="due to some erre"/>
        <div className="card_info">
          <span className="card_category">{pros.title}</span>
          <h3 className="card_title">{pros.sname}</h3>
          <a href={pros.link} target="_blank">
            <button>watch Now</button>
          </a>
        </div>
      </div>
    </div>
    </>
)
};

export default Main;