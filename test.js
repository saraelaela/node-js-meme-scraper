import axios from 'axios';
import * as cheerio from 'cheerio';

// 02 Making the HTTP Request
const axiosRequest = await axios.request({
  method: 'GET',
  url: 'https://memegen-link-examples-upleveled.netlify.app',
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
  },
});

// 03 loading the page: To query/manipulate DOM elements, we need to load raw HTML into cheerio:
const $ = cheerio.load(axiosRequest.data);

// const imageArr = axiosRequest.split(' ');
// console.log(imageArr([2]));

// const axiosArr = [`${axiosRequest.data}`];
// const slicedArray = array.slice(0, n);

// const memeSection = $('section.images');
// const name;

// // folder to save images
// if (!fs.existsSync('memes')) {
//   fs.mkdirSync('memes');
// }

// // TO DO: function around it to loop for images?
// const img = section.a.find('img');
// const photograph = img.attr('src') || '';

// if (photograph) {
//   await axios
//     .get(photograph, { responseType: 'arraybuffer' })
//     .then((response) => {
//       fs.writeFileSync(`memes/${name}.jpg`, response.data);
//     });
// }
