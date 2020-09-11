import React, { useState, useEffect } from "react";
import "./styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { BANK_ONE } from "./audio_banks/bankOne";
import { BANK_TWO } from "./audio_banks/bankTwo";

import Display from "./components/display";
import Drumpad from "./components/drumpad";
import Switch from "./components/switch";
import VolumeSlider from "./components/volumeSlider";

export default function App() {
  const DEFAULT_BANK = BANK_ONE;
  const DEFAULT_DISPLAY_VALUE = "CLICK A BUTTON";
  const DEFAULT_VOLUME = 100;
  const DEFAULT_IS_ON = true;
  const DEFAULT_BANK_SELECTION = true;

  const [keyList, setKeyList] = useState(Object.keys(DEFAULT_BANK));
  const [audioBank, setAudioBank] = useState(DEFAULT_BANK);
  const [display, setDisplay] = useState(DEFAULT_DISPLAY_VALUE);
  const [volume, setVolume] = useState(DEFAULT_VOLUME);
  const [isOn, setIsOn] = useState(DEFAULT_IS_ON);
  const [bankSelection, setBankSelection] = useState(DEFAULT_BANK_SELECTION);

  useEffect(() => {
    bankSelection
      ? setKeyList(Object.keys(BANK_ONE))
      : setKeyList(Object.keys(BANK_TWO));
    bankSelection ? setAudioBank(BANK_ONE) : setAudioBank(BANK_TWO);
  }, [bankSelection]);

  function handleDisplay(toDisplayVal) {
    setDisplay(toDisplayVal);
  }

  function handleSwitch(event) {
    const { name } = event.target;
    name === "power" ? setIsOn(!isOn) : setBankSelection(!bankSelection);
  }

  function handleVolumeChange(event) {
    const { value } = event.target;
    setVolume(value);
  }

  return (
    <div id="main-window">
      <div id="drum-machine">
        <div id="drumpad-container">
          {keyList.map((d, i) => (
            <Drumpad
              key={i}
              power={isOn}
              keyValue={d}
              audioBank={audioBank[d]}
              volume={volume}
              handleDisplay={handleDisplay}
            />
          ))}
        </div>

        <div id="setup-container">
          <div id="setup-inner-container">
            <Switch
              name="power"
              title="Power"
              selection={isOn}
              handleSwitch={handleSwitch}
            />

            <Display displayValue={display} />

            <VolumeSlider
              volume={volume}
              handleVolumeChange={handleVolumeChange}
            />

            <Switch
              name="bankSelection"
              title="Bank"
              selection={bankSelection}
              handleSwitch={handleSwitch}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
