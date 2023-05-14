const API_KEY = "34884998-68d78d4359a242f869564c2a4";
const URL = 'https://pixabay.com/api/';
const DEFAULT_OPTIONS = {
    key: API_KEY,
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page: 1,
    per_page: 12,
}

export { URL, DEFAULT_OPTIONS };