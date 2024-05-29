const express = require('express');
const app = express();
const port = process.env.port || 8080;

app.use(express.static("public"));
//app.get('/', (req, res) => res.send(' THIS IS CSC 314 CLOUD COMPUTING DEVOPS; CI-CD PIPELINE CREATED WIT AWS. THIS PAGE INDICATES SUCCESS. NAME: OGBUIGBA JENNIFER HOMA; MATRIC NUMBER: VUG/CSC/21/5201'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);



