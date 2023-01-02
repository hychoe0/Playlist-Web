import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import "./GenreDropDown.scss";

const animatedComponents = makeAnimated();

/**
 * data: data for dropdown selection
 * setData: useState
 */
export default function DropDown({ data, setData }) {
  return (
    <div className="selection-menu">
      <span id="selection-title">Select any genre</span>
      <Select
        className="dropdown"
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[]}
        isMulti
        options={data}
        onChange={(newData) => {
          const genre = newData.map((v) => v.value);
          setData(genre);
          // if genre is correctly selected
          console.log(genre);
        }}
      />
    </div>
  );
}
