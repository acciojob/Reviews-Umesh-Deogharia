import React, { useState } from "react";
import Data from "./Data";
export default function Review() {
  // console.log(Data[0]);
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = Data[index];

  function handlePrevClick() {
    setIndex((prevIndex) => prevIndex === 0 ? Data.length - 1 : prevIndex - 1
    );
  }
  function handleNextClick() {
    setIndex((prevIndex) => prevIndex === Data.length - 1 ? 0 : prevIndex + 1
    );
  }

  function handleRandomClick() {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * Data.length);
    } while (newIndex === index);
    setIndex(newIndex);
  }
  return (
    <div>
      <img src={image}  alt={name} className="person-img" />
      <h1 id = {`author-${id}`}>{name}</h1>
      <p className="job">{job}</p>
      <p className="info">{text}</p>

      <button className="prev-btn" onClick={handlePrevClick}>Previous</button>
      <button className="next-btn" onClick={handleNextClick}>Next</button>
      <button onClick={handleRandomClick} className="random-btn">surprise me</button>
    </div>
  );
}
