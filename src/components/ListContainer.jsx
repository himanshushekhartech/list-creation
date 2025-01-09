import React from "react";
import ListItem from "./ListItem";
import "./ListContainer.css"; // Add this for styling

function ListContainer({ listNumber, items }) {
  // Ensure items is defined and is an array
  if (!items || !Array.isArray(items) || items.length === 0) {
    return (
      <div className="list-container">
        <h3>List {listNumber}</h3>
        <p>No items available</p>
      </div>
    );
  }

  return (
    <div className="list-container">
      <h3>List {listNumber}</h3>
      <div className="vertical-slider-container">
        {items.map((item) => (
          <ListItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default ListContainer;
