import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import "../DropDown.scss";

const animatedComponents = makeAnimated();

/**
 * data: data for dropdown selection
 * setData: useState
 */
export default function NumPlayDropDown({ data, setData }) {
  return (
    <div className="selection-menu">
      <span id="selection-title">Select number of plays</span>
      <Select
        className="dropdown"
        closeMenuOnSelect={true}
        components={animatedComponents}
        defaultValue={[]}
        options={data}
        handleChange={(data) => {
          const numPlay = data.map((v) => v.value);
          setData(numPlay);
          // if numPlay is correctly selected
          console.log(data);
        }}
      />
    </div>
  );
}
