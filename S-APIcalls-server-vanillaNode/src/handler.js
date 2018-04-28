//documentation:
//request module: https://github.com/request/request

const fs = require('fs');
const path = require('path');
const request = require('request');

const staticHandler = (res, filepath) => {
  const extension = filepath.split('.')[1];
  const extensionType = {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    ico: 'image/x-icon',
    svg: 'image/svg+xml'
  };

  fs.readFile(path.join(__dirname, '..', filepath), 'utf8', (error, file) => {
    if (error) {
      res.writeHead(500, { 'content-type': 'text/plain' });
      res.end('server error');
    } else {
      res.writeHead(200, { 'content-type': extensionType[extension] });
      res.end(file);
    }
  });
};

const dataHandler = res => {
  try {
    const url = 'https://dog.ceo/api/breeds/image/random';
    request(url, (error, response, body) => {
      if (error) {
        res.writeHead(response.statusCode, { 'content-type': 'text/plain' });
        res.end(`api request error: ${response.statusCode}`);
      } else {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(body);
      }
    });
  } catch (error) {
    console.log('Error, could not initiate API request');
    return error.message;
  }
};

module.exports = {
  staticHandler,
  dataHandler
};
