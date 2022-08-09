const express = require('express')
const path = require('path');
const app = express();
app.use('/static', express.static('public'))

app.get('/',function(req,res) {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.use(function(req, res, next)  {
    res.status(404)
    res.send('Page Not Found')
});


app.listen(4000, () => {
    
})