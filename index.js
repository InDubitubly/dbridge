const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 5000;
app.use(express.json());
app.use(express.static('public'));

//default load
app.use((_req, res) => {
        res.sendFile('index.html', {root: 'public'});
});

//default error
app.use(function (err, req, res, next) {
        res.status(500).send({type: err.name, message: err.message});
});

app.listen(port, () => {
        console.log(`listening on port ${port}`);
});
