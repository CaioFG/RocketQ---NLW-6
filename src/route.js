const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomControler = require('./controllers/RoomController')

const route = express.Router()

route.get('/', (req, res)=> res.render('index', {page: 'enter-room'}))
route.get('/create-pass', (req, res)=> res.render('index', {page: 'create-pass'}))

route.get('/room/:room', (req, res)=> res.render('room'))

route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/create-room', RoomControler.Create)

module.exports = route