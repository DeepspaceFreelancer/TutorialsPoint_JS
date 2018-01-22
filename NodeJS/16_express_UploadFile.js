var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

var os = require("os");
var tempDir = os.tmpdir();
var multer  = require('multer');
// Was unable to get this one running, maybe newer NodeJS. Something with this line:
app.use(multer({ dest: './uploads'}));

app.get('/index.html', function (req, res) {
   res.sendFile( __dirname + "/" + "16_express_UploadFile.html" );
})

app.post('/file_upload', function (req, res) {
   console.log(req.files.file.name);
   console.log(req.files.file.path);
   console.log(req.files.file.type);
   var file = __dirname + "/" + req.files.file.name;

   fs.readFile( req.files.file.path, function (err, data) {
      fs.writeFile(file, data, function (err) {
         if( err ){
            console.log( err );
            }else{
               response = {
                  message:'File uploaded successfully',
                  filename:req.files.file.name
               };
            }
         console.log( response );
         res.end( JSON.stringify( response ) );
      });
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)
   console.log("http://127.0.0.1:8081/index.html");
})