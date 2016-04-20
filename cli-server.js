'use strict';
const express = require('express');
const app = express();

app.use(express.static('build'));

app.listen('8080', ()=>{
  console.log('Port 8080 is listening..');
});
