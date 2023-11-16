var fs = require('fs');

try {
    var room = JSON.parse(fs.readFileSync('./data/room.json', 'utf8'));
  } catch (error) {
    console.error('Error reading or parsing room.json:', error.message);
    res.status(500).send('Internal Server Error');
  }

/* GET travel view */
const rooms = (req, res) => {
    console.log('Reached /rooms route');
    res.render('rooms', { title: 'Travlr Getaways', room });
};

module.exports = {
    rooms
};