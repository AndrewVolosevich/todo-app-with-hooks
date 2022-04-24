import React from 'react';
import {Input} from "antd";

const SearchItems = ({search, handleSearch}) => {
  return (
    <div style={{maxWidth: '150px'}}>
      <Input
        value={search}
        onChange={(e) => {
          handleSearch(e.target.value)
        }}
        size="large"
        placeholder="Search todo"
      />
    </div>
  );
};

export default SearchItems;