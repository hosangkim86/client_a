// Client A 定期試験　message.js

module.exports = {
    create: function (name, number, age) {
      const message = `${name}の学籍番号は${number}です。\n${age}歳です。`;
      return message;
    }
  };
