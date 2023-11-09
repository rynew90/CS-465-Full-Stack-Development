var fs = require('fs');

var latest = JSON.parse(fs.readFileSync('./data/latest.json', 'utf8'));
var tips = JSON.parse(fs.readFileSync('./data/tips.json', 'utf8'));

/* GET travel view */
const news = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', latest, tips});
};

module.exports = {
    news
};