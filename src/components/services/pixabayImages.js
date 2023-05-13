// let page = 1;
// let q = null;
    
// async function fetchPhotos(q, page) {
//     const URL = 'https://pixabay.com/api/';
//     const key = '34884998-68d78d4359a242f869564c2a4'
    
//     return await fetch(`${URL}?key=${key}&q=${q}&image_type=photo&orientation=horisontal&safesearch=true&page=${page}&per_page=12`).then(response => {
//         if (response.ok) {
//             return response.data.hits;
//         }
//     })
// };

// const API = { fetchPhotos, page, q };

// export default API;

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12