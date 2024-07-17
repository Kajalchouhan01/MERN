// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

cconst Api = () => {
  const [data, setData] = useState([]);
  const [comments, setComments] = useState({});
  const [query, setQuery] = useState('');

  const fetchData = async (searchQuery) => {
    const url = `https://youtube-v31.p.rapidapi.com/search?q=${searchQuery}&part=snippet&type=video&maxResults=10`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
        'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY'
      }
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setData(result.items);
      fetchComments(result.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fetchComments = async (videos) => {
    const newComments = {};
    for (const video of videos) {
      const url = `https://youtube-v31.p.rapidapi.com/commentThreads?part=snippet&videoId=${video.id.videoId}&maxResults=5`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
          'X-RapidAPI-Key': 'YOUR_RAPIDAPI_KEY'
        }
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        newComments[video.id.videoId] = result.items;
      } catch (error) {
        console.error(`Error fetching comments for video ${video.id.videoId}:`, error);
      }
    }
    setComments(newComments);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchData(query);
  };

  return (
    <Router>
      <div>
        <SearchBar onFormSubmit={handleSearch} />
        <Switch>
          <Route path="/" exact>
            <HomePage videos={videos} onVideoSelect={setSelectedVideo} />
          </Route>
          <Route path="/video/:id">
            <VideoPlayer video={selectedVideo} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
