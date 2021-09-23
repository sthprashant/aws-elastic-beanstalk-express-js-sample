const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Pipeline is created using AWS CodePipline, CodeBuild, ElasticBeanstalk'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
