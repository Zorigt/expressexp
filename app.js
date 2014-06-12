var express = require("express");  
var app = express();

app.get("/", function(req, res){
  res.send("hello world");
});

var router = express.Router();

// route middleware that will happen on every request
router.use(function(req, res, next) {

	// log each request to the console
	console.log(req.method, req.url);

	// continue doing what we were doing and go to the route
	next();	
});

// home page route (http://localhost:8080)
router.get('/', function(req, res) {
	res.send('im the home page!');	
});

// about page route (http://localhost:8080/about)
router.get('/about', function(req, res) {
	res.send('im the about page!');	
});

router.param('name', function(req, res, next, name) {
	console.log("doing validation for: " + name);

	req.name = name;

	next();
});

router.get('/hello/:name', function(req, res) {
	res.send("Hey, " + req.name + "!");
});

// apply the routes to our application
app.use('/', router);

app.listen(process.env.PORT || 8000);
