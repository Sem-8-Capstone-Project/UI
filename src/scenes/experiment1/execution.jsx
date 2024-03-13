import Topabar from "../../components/topbar";
import Title from "../../components/experiments/title";
import Timer from "../../components/timer";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const SensitivityAnalysisExecution = () => {
  const [led1On, isLed1On] = useState(false);
  const [led2On, isLed2On] = useState(false);
  const [lightIntensity, setLightIntensity] = useState(0);
  const navigate = useNavigate();
  const headers = {
    "bypass-tunnel-reminder": 1,
  };
  const data = {
    key1: "value1",
  };
  const handleLED1 = async () => {
    if (!led1On) {
      axios
        .post("https://sauravbhise.loca.lt/light/actions/led1_on", data, {
          headers: headers,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("Turning on LED1");
      isLed1On((cur) => !cur);
    } else {
      axios
        .post("https://sauravbhise.loca.lt/light/actions/led1_off", data, {
          headers: headers,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("Turning off LED1");
      isLed1On((cur) => !cur);
    }
    setTimeout(() => {
      console.log("Waiting for 1 second before getting intensity");
    }, 1000);
    let response = await fetch(
      "https://sauravbhise.loca.lt/light/properties/light_intensity",
      {
        method: "GET",
        headers: headers,
      }
    );
    response = await response.json();
    setLightIntensity(response.lux);
  };

  const handleLED2 = async () => {
    if (!led2On) {
      axios
        .post("https://sauravbhise.loca.lt/light/actions/led2_on", data, {
          headers: headers,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("Turning on LED2");
      isLed2On((cur) => !cur);
    } else {
      axios
        .post("https://sauravbhise.loca.lt/light/actions/led2_off", data, {
          headers: headers,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      console.log("Turning off LED2");
      isLed2On((cur) => !cur);
    }
    setTimeout(() => {
      console.log("Waiting for 1 second before getting intensity");
    }, 1000);
    let response = await fetch(
      "https://sauravbhise.loca.lt/light/properties/light_intensity",
      {
        method: "GET",
        headers: headers,
      }
    );
    response = await response.json();
    setLightIntensity(response.lux);
  };

  const handleQuit= async()=>{
        try{
            const response = await fetch("http://localhost:5000/quit",{
              method: 'GET',
              credentials: "include"
            });
            if(response){
                navigate('/homepage');
            }
        }catch(e){
          console.log(e);
        }
  }
  return (
    <>
      <Topabar />
      <Title title="Sensitivity-Analysis using LED" />

      <section className="virtual-execution-container">
        <div className="timer-container">
          <div className="timer">
            <Timer />
          </div>
        </div>

        <div className="led-buttons">
          <div className="led 1">
            LED 1{" "}
            <div className="toggle-switch">
              <input
                type="checkbox"
                className="checkbox"
                name="LED 1"
                id="LED 1"
              />
              <label className="label" htmlFor="LED 1" onClick={handleLED1}>
                <span className="inner" />
                <span className="switch" />
              </label>
            </div>
          </div>
          <div className="led 2">
            LED 2{" "}
            <div className="toggle-switch">
              <input
                type="checkbox"
                className="checkbox"
                name="LED 2"
                id="LED 2"
              />
              <label className="label" htmlFor="LED 2" onClick={handleLED2}>
                <span className="inner" />
                <span className="switch" />
              </label>
            </div>
          </div>
          <div className="light-intensity" style={
            {
              fontWeight: "bold"
            }
          }>
            Light Intensity: {lightIntensity}
          </div>
        </div>
        <div className="quit-button-container" style={{
                        textAlign : "right",
                        marginRight :"10px",
        
                    }}>
                            <button className="quit-button" onClick={handleQuit} style={{
                                backgroundColor: "#D22B2B",
                                height: "40px",
                                borderRadius: "5px",
                                fontFamily: 'Helvetica',
                                color: "white"
                            }}>
                                Finish Experiment
                            </button>
                    </div>
      </section>
    </>
  );
};

export default SensitivityAnalysisExecution;
