// Client A 定期試験　main.js

const fs = require('fs');
const dotenv = require('dotenv');
const message = require('./message'); 

dotenv.config();

const name = process.env.NAME; 
const number = process.env.NUMBER; 
const age = process.env.AGE;

const resultmsg = message.create(name, number, age);

fs.writeFile('result.txt', resultmsg, (err) => {
  if (err) {
    console.error('ReWrite or Write ERROR ', err);
  } else {
    console.log('結果は現在フォルダのresult.txtに書かれています。');
  }
});
