const dbConnect = require('./mongodb');

// dbConnect().then((resp) => {
//     resp.find().toArray().then((data) => {
//         console.warn(data);
//     });
// });

const main = async () => {
    let data = await dbConnect();
    data = data.find();
    console.warn(data);
}

main();



// npm install --save-dev nodemon
// it is use the package during the development then we use it.  