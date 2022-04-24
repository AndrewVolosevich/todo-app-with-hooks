import React, {useState} from 'react';
import Search from "antd/es/input/Search";

const AddItemForm = ({handleAddItem}) => {
  const [title, setTitle] = useState('')

  return (
    <div>
      <Search
        placeholder="Add todo"
        enterButton="Add"
        size="large"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
        onSearch={() => {
          handleAddItem(title)
        }}
      />
    </div>
  );
};

export default AddItemForm;