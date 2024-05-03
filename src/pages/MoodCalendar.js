import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import MoodPicker from "../Components/MoodPicker.jsx";
import moment from "moment";
import happyImage from "../Components/Assests/happyy.png"; // Make sure the path is correct
import neutralImage from "../Components/Assests/notr.png"; // Make sure the path is correct
import sadImage from "../Components/Assests/sad.png"; // Make sure the path is correct
import happinessImage from "../Components/Assests/happiness.png"; // Ensure the path is correct
const MoodCalendar = () => {
  const [moods, setMoods] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  const handleMoodClick = (mood) => {
    setMoods({ ...moods, [selectedDay]: mood });
    setSelectedDay(null); // Close the mood selector
  };

  const moodOptions = [
    { label: "happy", image: happyImage },
    { label: "neutral", image: neutralImage },
    { label: "sad", image: sadImage },
  ];

  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1; // Adjust month index for function

  return (
    <div className="calendar">
      {new Array(new Date(currentYear, currentMonth, 0).getDate())
        .fill(null)
        .map((_, i) => (
          <div
            key={i + 1}
            className="day"
            onClick={() => handleDayClick(i + 1)}
            style={{
              backgroundImage: `url(${moods[i + 1]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {i + 1} {/* Day number displayed in the center of the circle */}
          </div>
        ))}
      {selectedDay && (
        <div className="mood-selector">
          {moodOptions.map((mood) => (
            <button
              key={mood.label}
              onClick={() => handleMoodClick(mood.image)}
              style={{
                backgroundImage: `url(${mood.image})`,
                backgroundSize: "cover",
              }}
            >
              {/* Intentionally left blank to only show the image */}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
export default MoodCalendar;
