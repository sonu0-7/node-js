/* Crud File System.. */

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = `${dirPath}/newFile.txt`;

/* It is used to Create the file with some line of content.. */
// fs.writeFileSync(filePath, 'This is the first file using command..');

/* it is used to read the file */
// fs.readFile(filePath, 'utf8', (err, item) => {
//     console.log(item);
// });

/* It is used to append the some extra content on the previous file.. */
// fs.appendFile(filePath, ' and file name is newFile.txt', (err) => {
//     if(!err){
//         console.log('File is Updated..');
//     }
// });

/* It is used to rename the filename.. */
// fs.rename(filePath, `${dirPath}/newerFile.txt`, (err) => {
//     if(!err){
//         console.log('File name is renamed..');
//     }
// });

/* To remove the file with unlinksync() .. */
fs.unlinkSync(`${dirPath}/newerFile.txt`);