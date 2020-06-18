import React, { useState } from "react";

const Fave = (e) => {
    const [isFave, setIsFave] = useState(false);
    const handleClick = () => setIsFave(!isFave);
    console.log("switching fave status")
    const className = isFave ? 'remove_from_queue' : 'add_to_queue';
  return (
    <div className={`film-row-fave + ${className}`} onClick={handleClick} >
      <p className="material-icons">{isFave ? "remove_from_queue":"add_to_queue"}</p>
    </div>
  );
};

export default Fave;
