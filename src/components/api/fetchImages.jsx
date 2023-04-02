import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '29588079-fbc492831fdad231bf7222b96';
const IMAGES_PER_PAGE = 12;
const IMAGE_TYPE = 'photo';
const ORIENTATION = 'horizontal';

axios.defaults.baseURL = BASE_URL;

export const fetchImages = async (inputValue, pageNr) => {
  try {
    const response = await axios.get(
      `/?q=${inputValue}&page=${pageNr}&key=${API_KEY}&image_type=${IMAGE_TYPE}&orientation=${ORIENTATION}&per_page=${IMAGES_PER_PAGE}`
    );
    const images = response.data.hits.map(image => ({
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
      tags: image.tags,
    }));
    return images;
  } catch (error) {
    console.error(error);
    return [];
  }
};
