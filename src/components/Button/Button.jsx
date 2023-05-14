import PropTypes from 'prop-types';

import {Loader} from '../Loader/Loader';
import { Button, Container } from './Button.styled';

export const LoadMoreBtn = ({ isLoading, onClick }) => {
    return (
        <Container>
            {isLoading ? <Loader visible /> :
                <Button type="button" disabled={isLoading} onClick={onClick}>Load more</Button>}
        </Container>
    )
};

LoadMoreBtn.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default LoadMoreBtn;