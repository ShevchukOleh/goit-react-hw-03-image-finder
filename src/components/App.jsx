import { Component } from 'react';
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery'
import {ImageGalleryItem} from './ImageGalleryItem/ImageGalleryItem'
import { LoadMoreBtn } from './Button/Button';
import { Modal } from './Modal/Modal';
// import {API} from './services/pixabayImages'






export class App extends Component {
  
  render() {
    return (
      <div>
        <SearchBar />
        <ImageGallery><ImageGalleryItem/></ImageGallery>
        <LoadMoreBtn />
        <Modal/>
      </div>
    )
  };
};