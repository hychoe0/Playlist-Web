import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

import "../DropDown.scss";

const animatedComponents = makeAnimated();

/**
 * data: data for dropdown selection
 * setData: useState
 */

// export function setGenre({ data }) {
//   const options = data.map((genre) => ({ value: genre, label: genre }));

//   return options;
// }

var genreArray = [];

export default function GenreDropDown({ data, setData }) {
  const options = data.map((genre) => ({ value: genre, label: genre }));

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelection = (selected) => {
    if (selected.length > 3) {
      // limit the number of selected options to 3
      return;
    }
    setSelectedOptions(selected);
    const genre = selected.map((option) => option.value);
    setData(genre);
    genreArray = genre;
    // checking selectedOption
    console.log(genreArray);
  };

  return (
    <div className="selection-menu">
      <span id="selection-title">Select any genre (MAX: 3)</span>
      <Select
        className="dropdown"
        closeMenuOnSelect={false}
        components={animatedComponents}
        defaultValue={[]}
        isMulti
        options={options}
        value={selectedOptions}
        // onChange={(newData) => {
        //   const genre = newData.map((v) => v.value);
        //   setData(genre);
        //   // if genre is correctly selected
        //   console.log(genre);
        // }}
        onChange={handleSelection}
      />
    </div>
  );
}

export function getGenre() {
  return genreArray;
}
