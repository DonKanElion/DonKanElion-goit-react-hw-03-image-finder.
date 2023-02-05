import axios from 'axios';

// const BASE_URL = 'https://pixabay.com/api/?q=';
const API_KEY = '31409515-1e05b025820d8f08d6d70aee0';

const imagesApi = axios.create({
  baseURL: 'https://pixabay.com/api/?q=',
})


// порядовк запиту:
// https://pixabay.com/api/?q=cat&page=1&key=31409515-1e05b025820d8f08d6d70aee0&image_type=photo&orientation=horizontal&per_page=12`


  export const getImages = async (searchValue, page) => {

    const { data } = await imagesApi.get(`${searchValue}&${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)

    console.log('запит на сервер', data)
    return data;

    // fetch(
    //   `https://pixabay.com/api/?q=cat&page=1&key=31409515-1e05b025820d8f08d6d70aee0&image_type=photo&orientation=horizontal&per_page=12`
    // )
    //   .then(response => response.json())
    //   .then(images => console.log(images))
    //   .catch(error => console.log(error));
  };



// export default class ApiServise {
//   constructor() {
//     this.inputValue = ' ';
//     this.page = 1;
//   }

//   getImages = () => {
//     return fetch(
//       `https://pixabay.com/api/?q=cat&page=1&key=31409515-1e05b025820d8f08d6d70aee0&image_type=photo&orientation=horizontal&per_page=12`
//     )
//       .then(response => response.json())
//       .then(images => console.log(images))
//       .catch(error => console.log(error));
//   };
// }

// // Change this number to fetch different post
// const postId = 1;

// fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//   .then(response => response.json())
//   .then(post => console.log(post))
//   .catch(error => console.log(error));
