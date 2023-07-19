import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
// import { vibeSeeds } from "../../../constants";

import "../DropDown.scss";

const animatedComponents = makeAnimated();

var selectedVibe = [];

/**
 * data: data for dropdown selection
 * setData: useState
 */
export default function VibeDropDown({ data, setData }) {
  const options = data.map((vibe) => ({
    value: vibe.value,
    label: vibe.label,
  }));

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelection = (selected) => {
    setSelectedOptions(selected);
    const vibe = selected.map((option) => option.value);
    setData(vibe);
    selectedVibe = vibe;
    console.log(selectedVibe);
  };

  return (
    <div className="selection-menu">
      <span id="selection-title">Select a Vibe</span>
      <Select
        className="dropdown"
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[]}
        options={options}
        isMulti
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

export function averageScore() {}
