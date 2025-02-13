// app.use(express.static(path.join(__dirname, 'public'))) 
// for every request use this folder for static assets 
// it sets the default folder to check for a static asset(css, js, images)
// app.set('view engine', 'ejs') -> sets the view engine to ejs so ejs files are being rendered
// views are created inside the views directory which is configured by express so we dont need to mention it in the path
// express automatically search the view in views directory 
// same thing with public assets in ejs files