import axios from 'axios';
import { URL, DEFAULT_OPTIONS } from './options';

const fetchPhotos = async (requestParam, prevPage) => {
  const { data } = await axios.get(URL, { params: { ...DEFAULT_OPTIONS, q: requestParam, page: prevPage } });

  return { ...data, totalPage: Math.ceil(data.totalHits / DEFAULT_OPTIONS.per_page) };
}

export default fetchPhotos;