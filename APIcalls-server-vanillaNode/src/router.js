const { staticHandler, dataHandler } = require('./handler');

const router = (req, res) => {
  const url = req.url;
  console.log(url);
  if (url === '/') {
    staticHandler(res, 'public/index.html');
  } else if (url.indexOf('public') !== -1) {
    staticHandler(res, url);
  } else if (url.indexOf('data') !== -1) {
    dataHandler(res);
  } else {
    res.writeHead(404, { 'content-type': 'text/plain' });
    res.end('404 error');
  }
};

module.exports = router;
