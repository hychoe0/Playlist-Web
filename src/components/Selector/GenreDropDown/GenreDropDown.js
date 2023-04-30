import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import "../DropDown.scss";

const animatedComponents = makeAnimated();

/**
 * data: data for dropdown selection
 * setData: useState
 */
export default function GenreDropDown({ data, setData }) {
  const options = data.map((genre) => ({ value: genre, label: genre }));

  return (
    <div className="selection-menu">
      <span id="selection-title">Select any genre</span>
      <Select
        className="dropdown"
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[]}
        isMulti
        options={options}
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
