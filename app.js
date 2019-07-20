const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(9000, (err) => { 
if(err){ 
return console.log(err) 
} 
console.log(`🚀 Server ready at http://localhost:9000`); 
});