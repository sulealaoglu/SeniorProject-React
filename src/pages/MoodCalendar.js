import React, { useState } from "react";
import moment from "moment";
import videoBg from "../Components/Assests/blossom.mp4";
import veryHappyImage from "../Components/Assests/emotions/very_happy.png";
import happyImage from "../Components/Assests/emotions/happy.png";
import neutralImage from "../Components/Assests/emotions/neutral.png";
import sadImage from "../Components/Assests/emotions/sad.png";
import verySadImage from "../Components/Assests/emotions/very_sad.png";

const MoodCalendar = () => {
  const [moods, setMoods] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleDayClick = (day) => {
    setSelectedDay(moment(currentDate).date(day).toDate());
  };

  const handleMoodClick = (mood) => {
    setMoods({ ...moods, [selectedDay]: mood });
    setSelectedDay(null);
  };

  const moodOptions = [
    { label: "very_happy", image: veryHappyImage },
    { label: "happy", image: happyImage },
    { label: "neutral", image: neutralImage },
    { label: "sad", image: sadImage },
    { label: "very_sad", image: verySadImage },
  ];

  const monthName = moment(currentDate).format("MMMM");
  const year = moment(currentDate).year();
  const daysInMonth = moment(currentDate).daysInMonth();
  const days = [];

  // Fill in the days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(
      <div
        key={day}
        className="day"
        onClick={() => handleDayClick(day)}
        style={{
          backgroundImage: `url(${
            moods[moment(currentDate).date(day).toDate()]
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {day}
      </div>
    );
  }

  const nextMonth = () => {
    setCurrentDate(moment(currentDate).add(1, "months").toDate());
  };

  const prevMonth = () => {
    setCurrentDate(moment(currentDate).subtract(1, "months").toDate());
  };

  return (
    <div>
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />

      <div className="content">
        <div className="calendar-header">
          <button className="month-button" onClick={prevMonth}>
            &laquo;
          </button>
          <div className="month-name-container">
            <button className="month-name">{`${monthName} ${year}`}</button>
          </div>
          <button className="month-button" onClick={nextMonth}>
            &raquo;
          </button>
        </div>

        <div className="calendar">
          {days.map((day, index) => (
            <div
              key={index}
              className="day"
              onClick={() => handleDayClick(index + 1)}
              style={{
                backgroundImage: `url(${
                  moods[
                    moment(currentDate)
                      .date(index + 1)
                      .toDate()
                  ]
                })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {index + 1}
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
      </div>
    </div>
  );
};
export default MoodCalendar;
