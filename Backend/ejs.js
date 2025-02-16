// app.use(express.static(path.join(__dirname, 'public'))) 
// for every request use this folder for static assets 
// it sets the default folder to check for a static asset(css, js, images)
// app.set('view engine', 'ejs') -> sets the view engine to ejs so ejs files are being rendered
// views are created inside the views directory which is configured by express so we dont need to mention it in the path
// express automatically search the view in views directory 
// same thing with public assets in ejs files

// <-------------- Templating ------------->

// various more templating engines - handlebars, pug, jade, nunjucks (all of them for js only)
// EJS (embedded js) in html
// Templating allows us to define a preset pattern for a webpage that we can dynamically modify

// <---- Configuring EJS as the view engine for express ----->

// app.set("view engine", "ejs")
// we dont need to explicitly require it, express bts does that
// by default express looks for views in the views directory (default -> process.cwd + /views)
// we use res.render() for rendering a view
// 'home.ejs' -> redundant 'home' is just needed
// to be able to render views like this , we must run the server from the same directory as /views
// we can run the server from some outside dir but " process.cwd "(gives dir from where we ran the server) this will be different so views will not render
// this happens because process.cwd is not an absolute path to the /views
// to fix this 
// we need to require "path" module (give utilities for working with file and directory paths)
// app.set("views", path.join(__dirname, '/views')) __dirname -> is the absolute path to index.js file
// <%= (we can write javascript here) (evaluates the code / embedding data)  %>
// we try to do as less computation as possible in our views, we can pass data via the res.render(route, data)
// we can access the data in the view to render it
// data will be an object (key value pairs of details)
// we can pass it just { data } rather than { data: data }

// if we use a ternary operatorin ejs we do need <%= %> to evaluate it
// loops for similar data
// if we pass an object on res.send we have to use data.prop1 \ data.prop2 to access the data
// we can use spread operator to pass the data to the view 
// res.render('home', { ...data }) then we can access the properties directly by their name in the view

// <---------- Serving Static Files in Express (css/js) --------->

// we use express.static() to serve static files (a middleware)
// whatever type of request comes in, it goes through all the middleware
// if we have served public directory
// we can access the files in the public directory directly without /public in the path
// but the same issue we faced with the views directory, we need to set the absolute path to the public directory
// app.use(express.static(path.join(__dirname, 'public')))
// everything in the public directory is served as static assets
// the fact the static assets are served we can acces them using /css/style.css in the route

// <------------------ EJS Partials ----------------->
// <%- include('partials/header') %> -> include the header.ejs file in the current file
// we can get rid of redundant code in the views by using partials
// we can create a partials directory and put the header.ejs file in it
// it also reduces the need to make changes in multiple files, we can just change the base file

// <%- %> (it will be treated as html(unescaped))
// <%= %> (outputs the value (html escaped))