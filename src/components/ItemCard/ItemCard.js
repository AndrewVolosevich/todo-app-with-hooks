import React from 'react';
import {Button} from "antd";
import {Typography} from "antd";

const {Text} = Typography

const ItemCard = ({item, deleteItem, toggleImportant}) => {
  return (
    <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
      <Text type={item.important ? 'success' : 'warning'}>{item.label}</Text>
      <div>
        <Button onClick={() => {
          deleteItem(item.id)
        }} danger>Delete</Button>
        <Button onClick={() => {
          toggleImportant(item.id)
        }} >Important</Button>
      </div>
    </div>
  );
};

export default ItemCard;