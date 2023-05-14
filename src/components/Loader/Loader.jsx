import { ThreeDots } from 'react-loader-spinner';

export const Loader = () => (
    <div>
        <ThreeDots 
            height="50" 
            width="80" 
            radius="9"
            color="#ff0101" 
            // wrapperStyle={{
            //     position: "fixed",
            //     top: "95%",
            //     left: "50%",
            //     transform: "translateX(-50%)",
            // }}
            ariaLabel="three-dots-loading"
            visible={true}
        />
    </div>
);