import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [photos, setPhotos] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 7;

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_start=${startIndex}&_limit=${itemsPerPage}`
      );
      
      setPhotos((prevPhotos) => [...prevPhotos, ...response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const loadMore = () => {
    setStartIndex((prevIndex) => prevIndex + itemsPerPage);
  };

  useEffect(() => {
    fetchData();
  }, [startIndex]);

  return (
    <div className="App">
      <h1>Photos</h1>
      <ul>
        {photos.map((photo) => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
      <div className="load-more-container">
        <button onClick={loadMore}>Load More</button>
      </div>
    </div>
  );
}

export default App;
