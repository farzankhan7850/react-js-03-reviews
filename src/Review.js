import React, { useState } from "react";
import people from "./data";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuora,
  FaQuoteRight,
} from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, image, job, name, text } = people[index];

  const prevButton = () => {
    index > 0 ? setIndex(index - 1) : setIndex(people.length - 1);
  };
  const nextButton = () => {
    index < people.length - 1 ? setIndex(index + 1) : setIndex(0);
  };

  const randomButton = () => {
    let random = Math.floor(Math.random() * people.length);

    random === index && random !== 0 && random !== people.length
      ? setIndex(random - 1)
      : setIndex(random);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="text">{text}</p>
      <div className="btn-container">
        <button onClick={prevButton} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextButton} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomButton} className="random-btn">
        Surprise
      </button>
    </article>
  );
};

export default Review;
