import React from "react";

const MOODS = ["happy", "sad", "angry", "calm", "excited"];

const MoodPicker = ({ onMoodSelect, selectedDate }) => {
  return (
    <div className="mood-picker">
      <h2>Select a mood for {selectedDate.toLocaleDateString()}</h2>
      {MOODS.map((mood) => (
        <button key={mood} onClick={() => onMoodSelect(mood)}>
          {mood}
        </button>
      ))}
    </div>
  );
};

export default MoodPicker;
