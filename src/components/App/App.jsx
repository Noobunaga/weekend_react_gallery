import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


import Header from '../Header/Header.jsx';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const [galleryAlbum, setGalleryAlbum] = useState ([]);

  useEffect(() => {
    getGallery();
  }, []);


  const getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    })
    .then( response => {
      console.log('GET gallery', response.data);
      setGalleryAlbum(response.data);
    })
    .catch( err => {
      console.log('Error during GET', err);
    });
  }

  const addLove = (id) => {
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`,
    })
    .then(response => {
      console.log('Love added to picId', id);
      getGallery();
    })
    .catch(error => {
      console.log('Error loving', error);
    });
  }

  
  return (
      <div className="App">
          <Header />
          <main>
          <p>Gallery goes here</p>
            {/* <img src="images/goat_small.jpg"/> */}
          <GalleryList 
          galleryAlbum={galleryAlbum}
          addLove={addLove}
          />
          </main>
      </div>
    );
}

export default App;
