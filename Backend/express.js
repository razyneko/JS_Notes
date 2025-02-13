// express is a web framework for node.js, it helps to build web apps and APIs
// we can create servers
// parse incoming requests
// match those requests to particular routes
// crafting http response setting headers etc

// <----------- Library Vs Framework ----------------->

// we control the flow of app code and we decide when to use library and where
// with a framework that control is inverted, they provide a structured way and we have to follow the prescribed way of creating web apps, games etc 


// <--------- creating an express app --------------->

// const express = require('express');
// const app = express();
// app contains all the content that is needed to create an express app
// everytime we hit a route(all requests coming in go through it), "app.use()" code runs (middleware)
// ports are kind of unique addresses on the computer we can run our server and other things

// <-------------- Request and Response --------------->

// on every incoming request ... express gives us two objects "req" and "res" (not necessarily these names)
// "req" - represents incoming request (created by express given to us)
// "res" - represents outgoing response
// a http request is not a js object, its text information, not specific to any language, express turns it into js object for us to use by parsing the incoming http req info
// response object sends the response back to requesting route
// we get "req" and "res" inside app.use() as well
// res.send('Hi') --> content-type will be set to 'text/html'
// res.send({name: 'peter'}) content-type will be set to 'application/json' -> we get json back
// we can send (using res.send) .. text, html, objects(js) etc
// app.get(/(.*)/ (regex to catch unknown routes)

// <------------ Routing ------------->

// app.get(route, callback)
// for a single http request ... we can send a single response (res.send hits -> thats it)
// "/" -> root route
// route paths are matched and the callback is executed
// routes are matched in order
// but get and post also matters

// <------------ Express Path Parameters ---------->

// there are not 1000s of routes for 1000s of users, a a dynamic route is defined (a pattern)
// app.get("/profile/:username") -> username is a path parameter
// we can access it using req.params.username
// req.params -> object consisting of all the path parameters

// <---------------- Query Strings ----------------->

// key value pairs starting with "?" representing some info about the request
// parsing query strings is crucial
// "req" has access to "query" object which contain all key value pairs of queries sent
// so if "/search?q=dogs&color=red" so query object - { q: 'dogs', color: 'red' }
// all the parsing stuff is done by express
// we can always check if query was even passed or not by using if(!q)
