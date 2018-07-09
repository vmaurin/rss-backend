const express = require('express');
const request = require('request');

const app = express();
const port = 8080;

const feeds = new Map([
    ['clean-coder', 'https://blog.cleancoder.com/atom.xml'],
    ['nyt', 'http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml']
]);


feeds.forEach(function (value, key) {
    const url = '/' + key + '.xml';
    app.get(url, (req, res) => request(value).pipe(res));
    console.log('RSS feed ' + value + ' available at http://localhost:' + port + url);
});

app.listen(port, () => console.log('rss-backend listening on port ' + port));