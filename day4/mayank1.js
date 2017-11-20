const express = require('express');

// first server
const app3000 = express();
app3000.get('/bar/foo', function(req, res) {
    // code here for port 3000 handler
});
app3000.listen(3004);

// second server
const app3002 = express();
app3002.get('/foo/bar', function(req, res) {
    // code here for port 3002 handler
});
app3002.listen(3006);