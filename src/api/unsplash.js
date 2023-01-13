import axios from 'axios';

  export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers :{
        Authorization: 'Client-ID nJp1uEOQMwB3zH3jt2JQpMqc64qLxteOCPKNnbN3PSY'
    }
  });