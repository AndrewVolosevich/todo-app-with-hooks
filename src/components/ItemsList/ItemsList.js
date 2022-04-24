import React from 'react';
import ItemCard from "../ItemCard/ItemCard";

const ItemsList = ({items, deleteItem, toggleImportant}) => {
  return (
    <div style={{margin: '10px 0'}}>
      {items.map((item) => {
        return (
          <ItemCard
            key={item.id}
            item={item}
            deleteItem={deleteItem}
            toggleImportant={toggleImportant}
        />
        )
      })}
    </div>
  );
};

export default ItemsList;