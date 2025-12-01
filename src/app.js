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

// const express = require('express');

// const app = express();

// app.get("/user/:userId",( req, res) => {
//     console.log(req.params); // to access query parameters
//     res.send({name: 'John Doe', age: 30});
// });

// app.listen(3000 ,() => {
//     console.log('Server is running on port 3000');
//  });

const express = require("express");

const app = express();

app.use(
  "/user", [
  (req, res, next) => {
    console.log("Handling the route user !! ");
    // res.send("Response !!");
    next(); // to pass the control to next handler
  },
  (req, res,next) => {
    console.log("Handling the route user 2 !! ");
    // res.send("2nd Response !!");
    next();
  },
   (req, res,next) => {
    console.log("Handling the route user 2 !! ");
    // res.send("3nd Response !!");
    next();
  },
   (req, res,next) => {
    console.log("Handling the route user 2 !! ");
    // res.send("4nd Response !!");
    next();
  },
   (req, res, next) => {
    console.log("Handling the route user 2 !! ");
    res.send("5nd Response !!");
  }
]
);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
//  as soon as request comes to this routes it go to first route handler because it excute line by line know console log will be printed and response will be sent and request send
//  if there is no  res.send("Response !!"); then it will not go to next handler it will hang there unless you call next() function to go to next route handler
// if add  res.send("Response !!"); and next() both then it will give error because response can be sent only once.  as soon as we send this excuted this function it go in callback stack and it excute line by line and when next() is called it will give error because response is already sent.
// as a developer we dont write code like this
// if you send next() then dont send response in that handler then express will expecting response to be sent in next handler that means we can not GET response, express want make how many routes you want to but at the end response should be sent.
// you add this functions inside array [] you send 1 or 2 or more functions inside array 
