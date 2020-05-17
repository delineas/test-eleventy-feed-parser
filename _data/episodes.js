let Parser = require("rss-parser");
let parser = new Parser();

module.exports = async () => {
    
  let feed = await parser.parseURL("https://www.noesasuntovuestro.com/feed/");
//   console.log(feed.title);

//   feed.items.forEach((item) => {
//     console.log(item.title + ":" + item.link);
//   });

  return feed.items;
};