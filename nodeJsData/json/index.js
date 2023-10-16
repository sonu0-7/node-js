const fs = require('fs');
const bioData = {
    name : 'Sonu Kumar',
    age : 23,
    college : "MEFGI",
    En_no : 191160107065
}

// console.log(bioData);
const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// fs.writeFile("./jsonFile.json", jsonData, (err) => {
//     if(!err){
//         console.log(`Your file is created with these data : ${jsonData}`);
//     }
// });

// now have to read the file from jsonFile.json

fs.readFile("json/jsonFile.json", "utf-8", (err, data) => {
    console.log(data);
    // convert the json format to object..
    const objectData = JSON.parse(data);
    console.log(objectData);
});