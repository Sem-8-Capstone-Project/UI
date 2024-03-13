import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useNavigate } from "react-router-dom";


const Timer = () => {
    const navigate = useNavigate();
    
    const naviagateBack = ()=>{
        navigate('/homepage');
    }
  return (
    <>
      <CountdownCircleTimer
        isPlaying
        duration={300}
        colors={["#6CB4EE"]}
        onComplete={() => ({ shouldRepeat: true, delay: 1 })}
        size = {100}
      >
        {({ remainingTime }) => {
            if (remainingTime === 0) {
                    naviagateBack();
              }
            
              return (
                <div className="timer">
                  <div className="value">{remainingTime}</div>
                  <div className="text">seconds</div>
                </div>
              );
        }}
      </CountdownCircleTimer>
    </>
  );
};

export default Timer;
