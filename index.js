import * as fs from 'node:fs';
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

const imageSourceAttributes = $('img').map(function () {
  return $(this).attr('src');
});

const result = Object.keys(imageSourceAttributes).map((key) => [
  imageSourceAttributes[key],
]);

const firstTen = result.slice(0, 10).flat();

const arr = [];
for (let key of firstTen) {
  arr.push(key); // Add each element to the result array
}

let memeNumber = 0;
//let memeName = 'file';

// for (let element in firstTen) {
//   parseInt(memeNumber++);
//   console.log(`${memeName}_${memeNumber.toString().padStart(2, '0')}`);
// }

for (let key of firstTen) {
  await axios
    .get(key, {
      responseType: 'arraybuffer',
    })
    // eslint-disable-next-line no-loop-func
    .then((response) => {
      // Extract the last part of the URL for the image file name
      const fileName = key.split('/').pop();

      // Save the image with the desired file name format
      fs.writeFileSync(
        `memes/${memeNumber.toString().padStart(2, '0')}.jpg`,
        response.data,
      );

      // Increment memeNumber for the next image
      memeNumber++;
    });
}

// console.log(arr.join(' '));
// console.log(firstTen[0], firstTen[1], firstTen[2], firstTen[3], firstTen[4]);
