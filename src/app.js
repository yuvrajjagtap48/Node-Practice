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

// // next() function example
// const express = require("express");

// const app = express();

// app.use(
//   "/user", [
//   (req, res, next) => {
//     console.log("Handling the route user !! ");
//     // res.send("Response !!");
//     next(); // to pass the control to next handler
//   },
//   (req, res,next) => {
//     console.log("Handling the route user 2 !! ");
//     // res.send("2nd Response !!");
//     next();
//   },
//    (req, res,next) => {
//     console.log("Handling the route user 2 !! ");
//     // res.send("3nd Response !!");
//     next();
//   },
//    (req, res,next) => {
//     console.log("Handling the route user 2 !! ");
//     // res.send("4nd Response !!");
//     next();
//   },
//    (req, res, next) => {
//     console.log("Handling the route user 2 !! ");
//     res.send("5nd Response !!");
//   }
// ]
// );

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
// //  as soon as request comes to this routes it go to first route handler because it excute line by line know console log will be printed and response will be sent and request send
// //  if there is no  res.send("Response !!"); then it will not go to next handler it will hang there unless you call next() function to go to next route handler
// // if add  res.send("Response !!"); and next() both then it will give error because response can be sent only once.  as soon as we send this excuted this function it go in callback stack and it excute line by line and when next() is called it will give error because response is already sent.
// // as a developer we dont write code like this
// // if you send next() then dont send response in that handler then express will expecting response to be sent in next handler that means we can not GET response, express want make how many routes you want to but at the end response should be sent.
// // you add this functions inside array [] you send 1 or 2 or more functions inside array

// // middleware function example

// const express = require("express");

// const app = express();

// app.use(
//   "/",
//   (req, res, next) => {
//     next();
//   });
// // GET /user => it check all the app.xxx("matching route") functions and try to send response back if it dont not find any matching route it will hang there unless timeout occurs
// // it go to every function till function that actually send response back that function know as request handler and all function that go through in between known as middleware
// // GET /user => middleware chain => request handler

// app.get(
//   "/user",
//   (req, res, next) => {
//     next();
//   },
//   (req, res, next) => {
//     next();
//   },
//   (req, res, next) => {
//     console.log("Handling the route user 3 !! ");
//     res.send("3nd Response !!");
//   }
// );

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });
// // function that you put in middle " (req, res, next) => {next();},(req, res, next) => {next();} " is called middleware function

// Real world example of middleware
// const express = require("express");

// const app = express();

// app.get("/admin/getAllData", (req, res) => {
//     // logic of checking if the request is authorized
//     const token = "xyzadcv";
//     const isAdminAuthorized = token === "xyz";
//     if (isAdminAuthorized) {
//         res.send("All Data send");
//     }else {
//     res.status(401).send("Unauthorized Access");
//     }
// });
// app.get("/admin/deleteUser", (req, res) => {
//     // logic of checking if the request is authorized
//     const token = "xyzadcv";
//     const isAdminAuthorized = token === "xyz";
//     if (isAdminAuthorized) {
//         res.send("Delete User");
//     }else {
//     res.status(401).send("Unauthorized Access");
//     }

// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// } );

// if you want to does not repeat the authorization logic in every admin route every time we write authorization logic then we check admin is valid or not then we give them access to route we dont want to repeat this logic again and again for every admin route
// if you want to avoid repeating the authorization logic in every admin route you can use middleware
// const express = require("express");

// const app = express();

// const {adminAuth} = require("./middlewares/auth");

// console.log("Admin auth is getting checked !!");
// app.use("/admin", adminAuth);

// app.get("/admin/getAllData", (req, res) => {
//   res.send("All Data send");
// });

// app.get("/admin/deleteUser", (req, res) => {
//     res.send("Delete User");
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

// // Error Handling In Middleware
// const express = require("express");

// const app = express();

// app.get("/admin/getUserData", (req, res) => {
//   try {
//     // Logic of DB call
//     throw new Error("DB connection failed !!");

//     res.send("User Data send");
//   } catch (err) {
//     res.status(500).send("Something went wrong ");
//   }
// });
// //err shold be a first parameter because express identify this function as error handling middleware only if first parameter is error
// // this order is matter a lot
// app.use("/", (err, req, res, next) => {
//   if (err) {
//   }
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });





// First connect to DataBase then start the server very very imp thing about your app is start but it not connect to databse then user will not get proper data 
// Moongoose example
const express = require("express");
const connectDB = require("./config/database"); // to connect to database
const app = express();
const User = require("./models/user"); // User model

app.use(express.json()); // middleware to read json data we just define once it will work for all routes
// If i give app.use(()=>) it will work for all the routes

app.post("/signup", async (req, res) => {
    //  creating user instance using above data
    const user = new User (req.body); // we can not directly get this data because express dont know how to read json data because express only read JS object data and responce is give in JSON format for that we need to use middleware for that(express.json())

    try {
    await user.save()  // saving user to database
    res.send("User signed up successfully");
    }
    catch (err) {
    res.status(400).send("Error signing up user");
    }
});



connectDB().then(() => {
  console.log("Database connected successfully");

  app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
}) 
    .catch((err) => {
      console.error("Database connection failed", err);
    });
