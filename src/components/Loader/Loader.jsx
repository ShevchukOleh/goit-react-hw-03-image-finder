import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => (
    <div>
        <ThreeDots 
            height="50" 
            width="80" 
            radius="9"
            color="#ff0101" 
            ariaLabel="three-dots-loading"
            visible={true}
        />
    </div>
);