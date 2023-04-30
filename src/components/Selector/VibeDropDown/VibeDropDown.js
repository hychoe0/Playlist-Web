import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import "../DropDown.scss";

const animatedComponents = makeAnimated();

/**
 * data: data for dropdown selection
 * setData: useState
 */
export default function VibeDropDown({ data, setData }) {
  const options = data.map((vibe) => ({
    value: vibe.value,
    label: vibe.label,
  }));

  return (
    <div className="selection-menu">
      <span id="selection-title">Select a Vibe</span>
      <Select
        className="dropdown"
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[]}
        options={options}
        onChange={(newData) => {
          const selectedVibe = newData.value;
          setData(selectedVibe);
          // if vibe is correctly selected
          console.log(data.find((vibe) => vibe.value === selectedVibe).energy);
        }}
      />
    </div>
  );
}
