import { Component } from 'react';

import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Modal } from './Modal/Modal';
import { Container } from './App.styled';

export class App extends Component {
  state = {
    modalImg: {
      largeImageURL: '',
      tags: '',
    },
    searchQuery: '',
    isShowModal: false,
  };  

  handlerSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  hideModal = () => {
    this.setState({ isShowModal: false })
  }

  showModal = ({ largeImageURL, tags }) => {
    this.setState({ modalImg: { largeImageURL, tags }, isShowModal: true });
  }

  render() {
    const { modalImg, isShowModal, } = this.state;
    return (
      <Container>
        <SearchBar onSubmit={this.handlerSubmit} />
        <ImageGallery searchQuery={this.state.searchQuery} showModal={this.showModal} />
        {isShowModal && <Modal imgData={modalImg} onClose={this.hideModal} />}
      </Container>
    )
  };
};