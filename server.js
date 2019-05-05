const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 80; //change for deployment 
// const port = 3030;

const routeMethods = require('./routerMethods');
const routes       = require('./routes')(express.Router(), routeMethods);

// Serve any static files built by React
app.use(express.static(path.join(__dirname, "react-star/build")));


app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Request-With", "Content-Type", "Accept");
    next();
});

app.use('/people', routes);

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "react-star/build", "index.html"));
});


app.listen(port, () => console.log(`Listening on port ${port}`));