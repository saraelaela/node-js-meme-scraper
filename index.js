import axios from 'axios';
import * as cheerio from 'cheerio';

// import cheerio from 'cheerio';
// downloading the target web page
// by performing an HTTP GET request in Axios

//async function performScraping() {

const axiosResponse = await axios.request({
  method: 'GET',
  url: 'https://memegen-link-examples-upleveled.netlify.app',
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
  },
});
//}

// performScraping();

const $ = cheerio.load(axiosResponse.data);

//$.html();
// $('img[id=image]').html();
const htmlElement = $('#image');
console.log(htmlElement.html());

console.log(axios.isCancel('something'));
console.log(axiosResponse);

$.root().html();

// How to Select an Element in Cheerio
// Cheerio supports most of the common CSS selectors such as the class, id, and element selectors among others. In the code below, we are selecting the element with class fruits__mango and then logging the selected element to the console. Add the code below to your app.js file.

// const mango = $(".fruits__mango");
// console.log(mango.html()); // Mango
