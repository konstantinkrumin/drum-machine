import React, { useState, useEffect } from "react";

export default function Drumpad(props) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    document.addEventListener("keydown", handlePress);

    return () => document.removeEventListener("keydown", handlePress);
  }, []);

  useEffect(() => {
    document.addEventListener("keyup", handleRelease);

    return () => document.removeEventListener("keyup", handleRelease);
  }, []);

  function handlePress(event) {
    const keyPressed = event.key.toUpperCase();

    if (keyPressed === props.keyValue) {
      let buttonClicked = document.getElementById(keyPressed + "-Btn");
      buttonClicked.click();
      setIsActive(true);
    }
  }

  function handleRelease(event) {
    const keyPressed = event.key.toUpperCase();

    if (keyPressed === props.keyValue) {
      document.getElementById(keyPressed + "-Btn");
      setIsActive(false);
    }
  }

  function handleClick(event) {
    const { value } = event.target;

    let audio = document.getElementById(value);

    audio.volume = props.volume / 100.0;
    audio.play();
    audio.currentTime = 0;

    props.handleDisplay(props.audioBank.value);
  }

  return (
    <button
      type="button"
      className={`drum-pad ${isActive && props.power ? "active" : null}`}
      id={props.keyValue + "-Btn"}
      value={props.keyValue}
      disabled={!props.power}
      onClick={handleClick}
    >
      {props.keyValue}
      <audio
        className="clip"
        id={props.keyValue}
        src={props.audioBank.audioSource}
      />
    </button>
  );
}
