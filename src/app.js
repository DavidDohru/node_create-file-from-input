'use strict';

const readline = require('readline');
const fs = require('fs');

let fileName = '';
let fileContent = '';

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question1 = () => {
  return new Promise((resolve, reject) => {
    terminal.question('enter the file name: ', (answer) => {
      fileName = answer;
      resolve();
    });
  });
};

const question2 = () => {
  return new Promise((resolve, reject) => {
    terminal.question('enter the content? ', (answer) => {
      fileContent = answer;
      resolve();
    });
  });
};

const main = async() => {
  try {
    await question1();
    await question2();

    fs.writeFileSync(`./folderForNewFile/${fileName}.txt`, fileContent);
    // eslint-disable-next-line no-console
    console.log('Success created file');
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
  }
};

main();
