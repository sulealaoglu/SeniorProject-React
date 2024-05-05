import React, { useState } from "react";
const blogs = [
  {
    title: "Emotional Numbness and Numbness: Causes and Symptoms",
    image: "numbness.jpg",
  },
  {
    title: "Drug Addiction",
    image: "drug_addiction.jpg",
  },
];

const BlogSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % blogs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? blogs.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slide">
        <img src={blogs[currentIndex].image} alt={blogs[currentIndex].title} />
        <div className="title">{blogs[currentIndex].title}</div>
      </div>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default BlogSlider;
