const chalk = require('chalk');

const validator = require('validator');

// const res = 'Todays i am practicing the npm module';

// console.log(chalk.blue(res));

const gmail = validator.isEmail("sonu@gmail.com");

console.log(gmail ? chalk.green.inverse(gmail) : chalk.red.inverse(gmail));

console.log(gmail ? chalk.green("Yes, it's a correct email..") : chalk.red("No, It is not correct email.."));