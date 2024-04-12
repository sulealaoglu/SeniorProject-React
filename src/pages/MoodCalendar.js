import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import MoodPicker from "../Components/MoodPicker.jsx";
import moment from "moment";

const MoodCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [mood, setMood] = useState(null);
  const [tileMap, setTileMap] = useState(new Map());
  const [showMoodPicker, setShowMoodPicker] = useState(false);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setSelectedDate(newDate);
    setMood(null);
    setTileMap(new Map());
  };

  const handleDayClick = (day) => {
    setSelectedDate(day);
    setMood(null);
    setShowMoodPicker(true);
  };

  const handleMoodSelect = (mood) => {
    setMood(mood);
    setTileMap(new Map(tileMap.set(selectedDate, mood)));
    setShowMoodPicker(false);
  };

  const tileContent = ({ date, view }) => {
    if (view === "month" && tileMap.has(date)) {
      const moodStyle = {
        backgroundColor: MOOD_COLORS[tileMap.get(date)],
        color: "white",
        borderRadius: "50%",
        width: "35px",
        height: "35px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 0 2px rgba(0, 0, 0, 0.2)",
      };
      return <div style={moodStyle}>{MOODS[tileMap.get(date)]}</div>;
    }
  };

  const MOODS = ["happy", "sad", "angry", "calm", "excited"];
  const MOOD_COLORS = {
    happy: "green",
    sad: "blue",
    angry: "red",
    calm: "yellow",
    excited: "purple",
  };

  return (
    <div className="calendar-container">
      <Calendar
        value={date}
        onClickDay={handleDayClick}
        tileContent={tileContent}
      />
      {showMoodPicker && (
        <div className="mood-picker-container">
          <div className="mood-picker">
            <h2>Select a mood for {selectedDate.toLocaleDateString()}</h2>
            {MOODS.map((mood, index) => (
              <button key={index} onClick={() => handleMoodSelect(index)}>
                {mood}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MoodCalendar;
