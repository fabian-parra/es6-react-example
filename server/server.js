var express = require('express');
var bodyParser = require('body-parser');
var server = express();

//Initial data
var comments = [
  { "id": 1, "author": "Jhon", "text": "Esto es un comentario"},
  { "id": 2, "author": "Vincent", "text": "Yo tambien quiero comentar"}
];

//Support for CORS
server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//Support for json data incomming
server.use(bodyParser.json());

server.get('/comments', function(request, response){
  response.setHeader('Content-Type','application/json');
  response.send(comments);
});

server.post('/comments', function(request, response){
  var comment = request.body.comment;
  comments.push({ 
    id: (comments.length + 1), 
    author: comment.author, 
    text: comment.text
  })
  response.setHeader('Content-Type','application/json');
  response.send(comments);
})

server.listen(4001);
