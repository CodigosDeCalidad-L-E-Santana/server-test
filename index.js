const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hola usurio');
});

app.post('/', function(req, res) {
    console.log(req.body);
    res.end();
});

app.listen(port, (err) => {
    if (err) console.log(err);
    console.log(`Server on port ${port}`);
});