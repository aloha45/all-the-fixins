const Season = require('../models/season')
const { default: Axios } = require('axios')

module.exports = {
    index,
    show
}

function index(req, res) {
    Season.find({}).then((seasons) => {
        res.render('seasons/index', { 
            title: 'Season Index',
            user: req.user, 
            seasons})
    })
}

function show(req, res) {
    Season.findById(req.params.id, (err, season) => {
        res.render('seasons/show', {
            title: 'Season Details', 
            user: req.user, 
            season
        })
    })
}