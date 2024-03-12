import React from "react";
import "./styles.css"; // Assume you have a CSS file for styling
import { useNavigate } from "react-router-dom";
import Topabar from "../../components/topbar";
import WelcomeBar from "../../components/homepage/welcomeBar";
import Vision from "../../components/homepage/vision";
import Objectives from "../../components/homepage/objectives";


function Homepage() {
  const navigate = useNavigate();

  const handleClick = (page) => {
    navigate(`/${page}`);
  };

  

  return (
    <div className="App">
      <Topabar />
      <main>
        <WelcomeBar />
        <section className="vision-objectives">
          <Vision />
          <Objectives />
        </section>
        <section className="experiments">
          <section className="experiments-title">
            <h2>Available Experiments</h2>
          </section>
          <section className="experiments-list">
            <ol>
              <li
                onClick={() => handleClick("sensitivity-analysis")}
                style={{
                  border: "1px solid #ccc",
                  backgroundColor: "#f9f9f9",
                  padding: "10px",
                  margin: "5px",
                  cursor: "pointer",
                  fontSize: "20px",
                }}
              >
                Sensitivity-Analysis
              </li>
              <li
                onClick={() => handleClick("sensitivity-analysis")}
                style={{
                  border: "1px solid #ccc",
                  backgroundColor: "#f9f9f9",
                  padding: "10px",
                  margin: "5px",
                  cursor: "pointer",
                  fontSize: "20px",
                  width: "auto",
                }}
              >
                DC Motor
              </li>
            </ol>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Homepage;
