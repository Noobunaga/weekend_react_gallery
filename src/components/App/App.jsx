import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


import Header from '../Header/Header.jsx';
import GalleryList from '../GalleryList/GalleryList';

function App() {

  const [galleryList, setGalleryList] = useState ([]);
  const getGallery = () => {
    axios({
      method: 'GET',
      url: '/gallery',
    })
    .then( response => {
      console.log('GET gallery', response.data);
      setGalleryList(response.data);
    })
    .catch( err => {
      console.log('Error during GET', err);
    });
  }
    return (
      <div className="App">
          <Header />
          <main>
          <p>Gallery goes here</p>
            <img src="images/goat_small.jpg"/>
          <GalleryList 
          galleryList={galleryList}
          />
          </main>
      </div>
    );
}

export default App;
