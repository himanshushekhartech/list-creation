import React from "react";

function ListItem({ item }) {
  return (
    <div className="list-item">
      <h4>{item.name || "Unnamed Item"}</h4>
      <p>{item.description || "No description available"}</p>
    </div>
  );
}

export default ListItem;
