import React, { useState } from "react";

const Fave = (props) => {

    const handleClick = (e) => {
      console.log("switching fave status");
      props.onFaveToggle();
    }
    console.log(props.isFave)
    const className = props.isFave ? 'remove_from_queue' : 'add_to_queue';
    return (
      <div className= {`film-row-fave ${className}`} onClick={handleClick}>
        <p className="material-icons">{className}</p>
      </div>
  );
};

export default Fave;
