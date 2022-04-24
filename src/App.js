import React, {useMemo, useState} from 'react';
import {createItem} from "./utils";
import ItemsList from "./components/ItemsList/ItemsList";
import Header from "./components/Header/Header";
import AddItemForm from "./components/AddItemForm/AddItemForm";
import SearchItems from "./components/SearchItems/SearchItems";
import FilterItems from "./components/FilterItems/FilterItems";

const initialItems = [
  createItem('learn react'),
  createItem('learn redux'),
]

const App = () => {
  const [items, setItems] = useState(initialItems);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  const handleDeleteItem = (id) => {
    setItems([...items.filter(item => item.id !== id)])
  }

  const toggleImportant = (id) => {
    setItems(items.map(item => {
      if (item.id === id) {
        return {...item, important: !item.important}
      }
      return item
    }))
  }

  const handleAddItem = (label) => {
    if (label.length) {
      setItems([...items, createItem(label)])
    }
  }

  const handleSearch = (term) => {
    setSearch(term)
  }

  const handleFilter = (value) => {
    setFilter(value)
  }

  const searchedItems = useMemo(() => {

    return items.filter(item => {
      return item.label.toLowerCase().indexOf(search) !== -1
    })
  }, [items, search])

  return (
    <div style={{width: '400px', margin: '40px auto'}}>
      <Header style={{marginBottom: '20px'}} title={'To Do List'} />
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <SearchItems search={search} handleSearch={handleSearch} />
        <FilterItems filter={filter} handleFilter={handleFilter} />
      </div>
      <ItemsList
        items={searchedItems}
        deleteItem={handleDeleteItem}
        toggleImportant={toggleImportant}
      />
      <AddItemForm handleAddItem={handleAddItem} />
    </div>
  );
};

export default App;
