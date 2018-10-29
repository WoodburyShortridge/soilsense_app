const express = require('express')
const app = express()
const port = 5000

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// default API
var API = '/api/v1'

// Load the Cloudant library.
var Cloudant = require('@cloudant/cloudant');

var me = 'd7cd4e2d-f213-499d-91d0-7f410030e038-bluemix'; // Set this to your own account
var password = '95cc81983eca2c4a7f5f75996b25031c902d348a5f09da7cc18d095750cccad9';

// Initialize the library with my account.
var cloudant = Cloudant({account:me, password:password});
var mydb = cloudant.db.use('gahk');

var all_docs;

mydb.get("_all_docs", function(err, data) {
  console.log(data);
  all_docs = data;
});

app.get(API + '/all_data', (req, res, next) => res.send(all_docs))

app.listen(port, () => console.log(`app listening on port ${port}!`))
