const express = require("express")
const app = express();

app.use(express.static(__dirname + '/app'));
//app.use('/', express.static(__dirname + '/app'));

app.listen(process.env.PORT || 3000);