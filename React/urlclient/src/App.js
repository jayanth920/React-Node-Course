import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [myList, setMyList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/list");
      console.log(response.data);
      setMyList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  function formatDate(dateString) {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  }

  return (
    <div>
      <h1>URL SHORTENER</h1>
      <div>
        <Link to="/generate">
          <button>GENERATE A URL !!</button>
        </Link>
        <button className="" onClick={fetchData}>
          GET DATA
        </button>
        <table>
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Original URL</th>
              <th>Redirect URL</th>
              <th>Clicks</th>
              <th>Created Date</th>
              <th>Latest Interaction</th>
            </tr>
          </thead>
          <tbody>
            {myList.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>{item.originalURL}</td>
                <td>
                  <button
                    onClick={() =>
                      window.open(
                        `http://localhost:8000/${item.shortID}`,
                        "_blank"
                      )
                    }
                  >
                    LINK
                  </button>
                </td>
                <td>{item.visitHistory}</td>
                <td>{formatDate(item.createdAt)}</td>
                <td>{formatDate(item.updatedAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
