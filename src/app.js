// const express = require('express');

// const app = express();

// // order of route definitions matters
// // order of excution starts from top to bottom so first match wins

// // This route will never be reached because the previous route matches all paths starting with "/hello"
// // so we provide "/hello/2" before "/hello" so it will match for both cases
// // if you provide "/hello" first then this route will never be reached it also consider as a part of "/hello"
// app.use("/hello/2",( req, res) => {
//     res.send('Hello, hello, hello!');
// });

// // "/hello" not only handle this it also handle "/hello/anything"


// // To handle only the exact path "/hello", you can use the `app.get` method instead of `app.use`.

// app.use("/hello",( req, res) => {
//     res.send('Hello, World!');
// });

// app.use("/test",(req, res) => {
//     res.send('Hello, World!');
// });

// app.listen(3000 ,() => {
//     console.log('Server is running on port 3000');
//    } );
  



// const express = require('express');

// const app = express();

// app.get("/user",( req, res) => {
//     res.send({name: 'John Doe', age: 30});
// });  // this will match only GET API calls to /user
 
// app.post("/user",( req, res) => {
//     res.send('User created successfully!');
// });  // this will match only POST API calls to /user

// app.delete("/user",( req, res) => {
//     res.send('User deleted successfully!');
// });  // this will match only DELETE API calls to /user




// app.use("/test",( req, res) => {
//     res.send('Hello, hello, hello!');
// });  // this will match all the HTTP methos API calls to /test

// app.listen(3000 ,() => {
//     console.log('Server is running on port 3000');
//  });





const express = require('express');

const app = express();

app.get("/user/:userId",( req, res) => {
    console.log(req.params); // to access query parameters
    res.send({name: 'John Doe', age: 30});
});  

app.listen(3000 ,() => {
    console.log('Server is running on port 3000');
 });
