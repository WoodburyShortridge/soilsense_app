const express = require('express')
const app = express()
const port = 5000

// Load the Cloudant library.
var Cloudant = require('@cloudant/cloudant');

var me = ''; // Set this to your own account
var password = '';

// Initialize the library with my account.
var cloudant = Cloudant({account:me, password:password});

var _all_docs;

cloudant.db.list(function(err, _all_docs) {
  console.log(_all_docs);
  // allDbs = allDbs.join(', ');
});

app.get('/', (req, res) => res.send(_all_docs))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
