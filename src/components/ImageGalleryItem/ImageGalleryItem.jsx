import PropTypes from 'prop-types';
import { ImageGalleryListItem, ImageGalleryItemImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ webformatURL, tags, largeImageURL, openModal }) => {
    return (
        <ImageGalleryListItem>
            <ImageGalleryItemImage
                src={webformatURL}
                alt={tags}
                onClick={() => openModal(largeImageURL, tags)}

            />
        </ImageGalleryListItem>
    )
};

ImageGalleryItem.propTypes = {
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
};
