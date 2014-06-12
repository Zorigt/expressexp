var express = require('express');
var app = express();
var router = express.Router();

// simple logger for this router's requests
// all requests to this router will first hit this middleware
router.use(function(req, res, next) {
  console.log('%s %s %s', req.method, req.url, req.path);
  res.send("this is first route.use");
  next();
});

// this will only be invoked if the path ends in /bar
router.use('/foo', function(req, res, next) {
  // ... maybe some additional /bar logging ...
  res.send("this is /bar");
  next();
});

// always invoked
router.use(function(req, res, next) {
  res.send('Hello World');
});

app.use('/foo', router);

app.listen(3000);
