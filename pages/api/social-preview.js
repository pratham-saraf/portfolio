import axios from "axios";
import cheerio from "cheerio";

export default async function handler(req, res) {
  const { username, repoName } = req.query;

  try {
    const response = await axios.get(`https://github.com/${username}/${repoName}`);
    const $ = cheerio.load(response.data);
    const openGraphImage = $('meta[property="og:image"]').attr("content");

    res.status(200).json({ imageUrl: openGraphImage });
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching the social preview image." });
  }
}