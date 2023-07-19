import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { vibeSeeds } from "../../../constants";

import "../DropDown.scss";

const animatedComponents = makeAnimated();

var selectedVibe;

/**
 * data: data for dropdown selection
 * setData: useState
 */
export default function VibeDropDown({ data, setData }) {
  const options = data.map((vibe) => ({
    value: vibe.value,
    label: vibe.label,
  }));

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelection = (selected) => {
    setSelectedOption(selected);
    const vibe = selected ? selected.value : null;
    setData(vibe);
    selectedVibe = vibe;
    console.log(getVibe());
  };

  return (
    <div className="selection-menu">
      <span id="selection-title">Select a Vibe</span>
      <Select
        className="dropdown"
        closeMenuOnSelect={true}
        components={animatedComponents}
        options={options}
        isMulti={false}
        value={selectedOption}
        onChange={handleSelection}
        // onChange={(newData) => {
        //   const selectedOption = newData.value;
        //   setData(selectedOption);
        //   selectedVibe = selectedOption.value;
        //   // if vibe is correctly selected (TEST)
        //   console.log(data.find((vibe) => vibe.value === selectedOption).value);
        // }}
      />
    </div>
  );
}

export function getVibe() {
  return selectedVibe;
}

export function getScores() {
  var scores = [];
  var vibe_index;

  for (let i = 0; i < vibeSeeds.length; ++i) {
    if (selectedVibe === vibeSeeds[i].value) {
      vibe_index = i;
      break;
    }
  }

  scores.push(vibeSeeds[vibe_index].acousticness);
  scores.push(vibeSeeds[vibe_index].danceability);
  scores.push(vibeSeeds[vibe_index].energy);
  scores.push(vibeSeeds[vibe_index].loudness);

  return scores;
  // scores.push(vibeSeeds[vibe_index].acousticness);
  
  // return scores;
  
}
