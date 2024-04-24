import React, { useState } from "react";
import axios from "axios";
import SearchBar from "../SearchBar/SearchBar";
import "./GifGenerator.css";


function GifGenerator() {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiKey = import.meta.env.VITE_API_KEY
  

 

  const fetchGifs = async (query) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
      );
      setGifs(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching GIFs:", error);
      setLoading(false);
    }
  };

  return (
    <div className='gif-container'>
      <SearchBar onSearch={fetchGifs} />
      {loading && <p>Loading...</p>}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {gifs.map((gif) => (
          <img
            key={gif.id}
            src={gif.images.fixed_height.url}
            alt={gif.title}
            style={{ margin: "5px" }}
            className='gif'
          />
        ))}
      </div>
    </div>
  );
}

export default GifGenerator;
