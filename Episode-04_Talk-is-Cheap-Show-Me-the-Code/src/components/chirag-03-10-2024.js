import { useEffect, useState } from "react";
import "./chirag.css";
const Test = () => {
  const trafficLightObj = {
    red: {
      next: "yellow",
      duration: 2,
    },
    yellow: {
      next: "green",
      duration: 3,
    },
    green: {
      next: "red",
      duration: 4,
    },
  };
  const trafficLightObj2 = {
    red: {
      next: "yellow",
      duration: 2,
    },
    yellow: {
      next: "green",
      duration: 3,
    },
    green: {
      next: "red",
      duration: 4,
    },
  };
  const [color, setColor] = useState("red");
  const [delay, setDelay] = useState(0);
  const [trafficLight, setTrafficLight] = useState(trafficLightObj);
  let currSec = 0;

  useEffect(() => {
    console.log(
      "<---------------useEffect called---------------->",
      currSec,
      trafficLight
    );
    const duration = trafficLight[color]["duration"];
    currSec = 0;
    let timerId = setInterval(() => {
      currSec++;
      console.log("Inside setInterval", timerId, currSec, duration);
      if (currSec === duration) {
        currSec = 0;
        setColor(trafficLight[color]["next"]);
        setDelay(0);
        setTrafficLight(trafficLightObj2);
      }
    }, 1000);
    return () => {
      console.log("clearInterval called for: ", timerId);
      clearInterval(timerId);
    };
  }, [color, trafficLight]);

  const handleClick = (color) => {
    setColor(color);
  };
  const handleDelay = () => {
    console.log("Inside handleDelay--------->", delay);
    const obj = trafficLight[color];
    obj.duration = delay + (obj.duration - currSec);
    console.log("obj.duration:::", obj.duration);

    trafficLight[color]["duration"] = obj.duration;
    setTrafficLight(trafficLight);
  };
  return (
    <div className="outside">
      <div className="container">
        <input
          type="number"
          placeholder="enter increase timer"
          onChange={(event) => {
            console.log("Inside onChane:::", event);
            setDelay(parseInt(event.target.value));
          }}
          onKeyUp={(event) => {
            console.log("Inside onKeyUp:::", event);
            if (event.key === "Enter") {
              handleDelay();
            }
          }}
        />
      </div>
      <div className="container">
        <button
          onClick={() => {
            handleClick("red");
          }}
        >
          Red
        </button>
        <button
          onClick={() => {
            handleClick("yellow");
          }}
        >
          Yellow
        </button>
        <button
          onClick={() => {
            handleClick("green");
          }}
        >
          Green
        </button>
      </div>
      <div className="container">
        <div className={color === "red" ? "box red" : "box red disabled"}></div>
        <div
          className={color === "yellow" ? "box yellow" : "box yellow disabled"}
        ></div>
        <div
          className={color === "green" ? "box green" : "box green disabled"}
        ></div>
      </div>
    </div>
  );
};
export default Test;
