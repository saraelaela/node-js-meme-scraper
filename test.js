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

const images = $('img');
const photographs = [];

const imageSourceAttributes = $('img').map(function () {
  return $(this).attr('src');
});

const result = Object.keys(imageSourceAttributes).map((key) => [
  key,
  imageSourceAttributes[key],
]);

const firstTen = result.slice(0, 11);

// console.log(firstTen);

const [a, b, c, d, e, f, g, h, i, j] = firstTen;
console.log(a); // 1
console.log(b); // 2

// every pair of firstTen assign +1
