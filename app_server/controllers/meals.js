var fs = require('fs');

var food = JSON.parse(fs.readFileSync('./data/food.json', 'utf8'));

/* GET travel view */
const meals = (req, res) => {
    res.render('travel', { title: 'Travlr Getaways', food});
};

module.exports = {
    meals
};