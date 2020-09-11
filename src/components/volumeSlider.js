import React from "react";

export default function VolumeSlider(props) {
  return (
    <input
      type="range"
      id="volumeSlider"
      className="custom-range"
      name="volume"
      min="0"
      max="100"
      value={props.volume}
      onChange={props.handleVolumeChange}
    />
  );
}
