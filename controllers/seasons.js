const Season = require('../models/season')

module.exports = {
    index
}

function index(req, res) {
    Season.find({}).then((seasons) => {
        res.render('seasons/index', { title: 'Season Index', seasons})
    })
}