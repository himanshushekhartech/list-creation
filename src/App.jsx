import React, { useEffect, useState } from "react";
import ListContainer from "./components/ListContainer";
import "./App.css";

function App() {
  const [groupedLists, setGroupedLists] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch and process data
  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await fetch("https://apis.ccbp.in/list-creation/lists");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();

        // Group items by `list_number`
        const grouped = data.lists.reduce((acc, item) => {
          if (!acc[item.list_number]) {
            acc[item.list_number] = [];
          }
          acc[item.list_number].push(item);
          return acc;
        }, {});
        setGroupedLists(grouped);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchLists();
  }, []);

  return (
    <div className="App">
      <h1>List Creation</h1>
      <button className="create-button">Create a new list</button>
      <div className="lists-container">
        {isLoading && <p>Loading...</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!isLoading &&
          !error &&
          Object.entries(groupedLists).map(([listNumber, items]) => (
            <ListContainer key={listNumber} listNumber={listNumber} items={items} />
          ))}
      </div>
    </div>
  );
}

export default App;
