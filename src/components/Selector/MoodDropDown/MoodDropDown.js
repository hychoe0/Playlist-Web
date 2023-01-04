import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import "../DropDown.scss";

const animatedComponents = makeAnimated();

/**
 * data: data for dropdown selection
 * setData: useState
 */
export default function MoodDropDown({ data, setData }) {
  return (
    <div className="selection-menu">
      <span id="selection-title">Select any mood</span>
      <Select
        className="dropdown"
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[]}
        isMulti
        options={data}
        onChange={(newData) => {
          const mood = newData.map((v) => v.value);
          setData(mood);
          // if mood is correctly selected
          console.log(mood);
        }}
      />
    </div>
  );
}
