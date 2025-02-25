import axios from 'axios';
import cheerio from 'cheerio';

async function searchMusic(query) {
  try {
    const response = await axios.get(`https://www.example.com/search?q=${encodeURIComponent(query)}`);
    const $ = cheerio.load(response.data);
    const results = [];

    $('.result').each((index, element) => {
      const title = $(element).find('.title').text();
      const url = $(element).find('.download-link').attr('href');
      results.push({ title, url });
    });

    return results;
  } catch (error) {
    console.error('Error searching music:', error);
    return [];
  }
}

export default searchMusic;