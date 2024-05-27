import moment from "moment";
import React, { useState, useEffect } from "react";
import springVideo from "../Components/Assests/spring.mp4";
import summerVideo from "../Components/Assests/summer.mp4";
import fallVideo from "../Components/Assests/fall.mp4";
import winterVideo from "../Components/Assests/winter.mp4";
import veryHappyImage from "../Components/Assests/emotions/very_happy.png";
import happyImage from "../Components/Assests/emotions/happy.png";
import neutralImage from "../Components/Assests/emotions/neutral.png";
import sadImage from "../Components/Assests/emotions/sad.png";
import verySadImage from "../Components/Assests/emotions/very_sad.png";
import Navbar from "../Components/NavBar";
import axios from "axios";
const MoodCalendar = () => {
  const [moods, setMoods] = useState({});
  const [selectedDay, setSelectedDay] = useState(null);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dailyText, setDailyText] = useState("");
  const [videoBg, setVideoBg] = useState(summerVideo); // Default to summer.mp4

  useEffect(() => {
    // Fetch clients assigned to admin
    fetch("/api/clients")
      .then((response) => response.json())
      .then((data) => setClients(data));
  }, []);

  const handleDayClick = (day) => {
    setSelectedDay(moment(currentDate).date(day).toDate());
  };

  const handleMoodClick = (mood) => {
    setMoods({ ...moods, [selectedDay]: mood });
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

  useEffect(() => {
    const month = moment(currentDate).month();

    switch (month) {
      case 2: // March
      case 3: // April
      case 4: // May
        setVideoBg(springVideo);
        break;
      case 5: // June
      case 6: // July
      case 7: // August
        setVideoBg(summerVideo);
        break;
      case 8: // September
      case 9: // October
      case 10: // November
        setVideoBg(fallVideo);
        break;
      case 11: // December
      case 0: // January
      case 1: // February
        setVideoBg(winterVideo);
        break;
      default:
        setVideoBg(summerVideo); // Default to summer
        break;
    }
  }, [currentDate]);

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
  const handleInputChange = (event) => {
    setDailyText(event.target.value);
  };

  const handleSave = () => {
    setCurrentDate(moment(currentDate).add(1, "months").toDate());
    axios
      .post(
        "http://localhost:5285/api/paradigm",
        {
          date: currentDate,
          mood: moods[selectedDay],
          content: dailyText,
        },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setSelectedDay(null);
  };

  return (
    <div>
      <Navbar />
      <div className="overlay"></div>

      <video src={videoBg} autoPlay loop muted />

      <div className="content">
        <div className="calendar-header">
          <button className="month-button" onClick={prevMonth}>
            &laquo;
          </button>
          <div className="month-name-container">
            <button className="month-name">
              {`${monthName.toUpperCase()} ${year}`}
            </button>
          </div>
          <button class="month-button" onClick={nextMonth}>
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
              <div className="mood-buttons">
                {moodOptions.map((mood) => (
                  <button
                    key={mood.label}
                    onClick={() => handleMoodClick(mood.image)}
                    style={{
                      backgroundImage: `url(${mood.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    {/* Intentionally left blank to only show the image */}
                  </button>
                ))}
              </div>
              <input
                type="text"
                className="mood-text-input"
                placeholder="Bugün için notunuzu giriniz."
                value={dailyText}
                onChange={handleInputChange}
              />
              <button onClick={handleSave()} className="save-button">
                Save
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoodCalendar;
