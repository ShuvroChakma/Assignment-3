let http = require('http');
let fs = require('fs');

let server = http.createServer(function(req, res){



   if(req.url=='/'){
      res.writeHead(200, {"Content-Type": "text/html"})
      res.write("<h1>This is the Home page!</h1>");
      res.end();

   }
   else if(req.url=='/about'){
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write("<h1>This is the About page!</h1>")
      res.end();

   }
   else if(req.url=='/contact'){
      res.writeHead(200, {"Content-Type": "text/html"});
      res.write("<h1>This is the Contact page!</h1>")
      res.end();

   }
   if(req.url=='/file-write'){
      fs.writeFile('demo.txt', 'Hello World!', function(error){
         if(error){
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("<h1>File write fail!</h1>");
            res.end();
         }
         else{
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write("<h1>File write successful!</h1>");
            res.end();
         }
      });
   }
});
server.listen("5500");
console.log("Server is listening on port 5500");


