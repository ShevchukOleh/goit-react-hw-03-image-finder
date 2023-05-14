import { Component } from 'react';
import fetchPhotos from "components/services/pixabayImages";
import { Loader } from 'components/Loader/Loader';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { LoadMoreBtn } from 'components/Button/Button';
import { Container, ImageGalleryList, Text } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    imageList: [],
    totalPage: 0,
    error: null,
    status: 'idle',
    page: 1,
    largeImageURL: '',
    tags: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevProps.searchQuery;
    const nextSearchQuery = this.props.searchQuery;
    const prevPage = prevState.page;
    const currentPage = this.state.page;

    const isNewSearchQuery = prevSearchQuery !== nextSearchQuery;

    if (isNewSearchQuery) {
      this.setState({ imageList: [], page: 1 });
    }

    if (isNewSearchQuery || prevPage !== currentPage) {
      const requestPage= isNewSearchQuery ? 1 : currentPage;

      if (this.state.status === 'pending') return 

      this.setState({ status: 'pending' });

      fetchPhotos(nextSearchQuery, requestPage)
        .then(data => this.setState((currentState) => ({
          imageList: currentState.imageList.concat(data.hits),
          totalPage: data.totalPage,
          status: 'resolved'
        })))
        .catch(error => this.setState({ error, status: 'rejected' }))
    }
  }

  handlerBtnClick = (e) => {
    const { page } = this.state;
    this.setState({
      page: page + 1,
    });
  };

  render() {
    const {
      imageList,
      error,
      status,
      page,
      totalPage
    } = this.state;

    if (status === 'idle') {
      return <Text>Enter a search query</Text>;
    }

    if (status === 'pending' && imageList.length === 0) {
      return <Container><Loader visible /></Container>;
    }

    if (status === 'rejected') {
      return <h1>{error.message}</h1>;
    }

    return (
      <div>
        {imageList.length === 0 && <Text>Nothing was found for this query</Text>}
        <ImageGalleryList>
          {imageList.map(({ id, webformatURL, tags, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              tags={tags}
              largeImageURL={largeImageURL}
              openModal={() => this.props.showModal({ largeImageURL, tags })} />
          ))}
        </ImageGalleryList>

        {page < totalPage && <LoadMoreBtn isLoading={status === 'pending'} onClick={this.handlerBtnClick} />}
      </div>
    );
  }
};

export default ImageGallery;