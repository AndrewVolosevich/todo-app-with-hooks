import React from 'react';
import {Radio} from "antd";

const options = [
  { label: 'Done', value: 'done' },
  { label: 'All', value: 'all' },
  { label: 'Important', value: 'important' },
]

const FilterItems = ({filter, handleFilter}) => {
  return (
    <div>
      <Radio.Group
        options={options}
        onChange={(e) => {
          handleFilter(e.target.value)
        }}
        value={filter}
        optionType="button"
      />
    </div>
  );
};

export default FilterItems;