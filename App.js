import React, { useState } from "react";

// Sample songs data
const songsList = [
  { id: 1, title: "Song A", artist: "Artist X", album: "Album 1", genre: "Pop", votes: 5 },
  { id: 2, title: "Song B", artist: "Artist Y", album: "Album 2", genre: "Rock", votes: 2 },
  { id: 3, title: "Song C", artist: "Artist Z", album: "Album 3", genre: "Jazz", votes: 3 },
];

function App() {
  const [songs, setSongs] = useState(songsList);
  const [search, setSearch] = useState("");

  // Search filter
  const filteredSongs = songs.filter(song =>
    song.title.toLowerCase().includes(search.toLowerCase()) ||
    song.artist.toLowerCase().includes(search.toLowerCase()) ||
    song.album.toLowerCase().includes(search.toLowerCase()) ||
    song.genre.toLowerCase().includes(search.toLowerCase())
  );

  // Upvote function
  const voteSong = (id) => {
    const updatedSongs = songs.map(song =>
      song.id === id ? { ...song, votes: song.votes + 1 } : song
    );
    setSongs(updatedSongs);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🎵 Online Music Portal</h1>
      <input
        type="text"
        placeholder="Search by title, artist, album, genre"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredSongs.map(song => (
          <li key={song.id}>
            <strong>{song.title}</strong> - {song.artist} ({song.album}, {song.genre})  
            <button onClick={() => voteSong(song.id)}>👍 {song.votes}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

