const path  = require("path");
const fetch = require('node-fetch');

module.exports = {
    getPerson: getPerson,
};


function getPerson(req, res) {
    const baseUrl = `https://swapi.co/api/people/?search=${req.query.name}`;

    fetch(baseUrl)
        .then(res => res.json())
        .then(data => {
            res.status(200)
                .json(data.results);
        }).catch(err => {
            console.error("Error: ", err);
        });
}
