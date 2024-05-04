const express = require('express')  // initializes variable express that imports express
const apiRoutes = require('./routes/api')  // initializes variable apiRoutes that handles routes listed

const app = express()  // initializes new variable app that creates the express web application server

app.use(express.json())  // allows handling of json data as requests

app.use('/api', apiRoutes)  // passes request to apiRoutes module defined in api.js

app.use(function(req, res, next) {  // express handling of improper routes
    res.status(404).send('Sorry, not found')  // prints message when path cannot be found
})

app.use(function(err, req, res, next) {  // express handling of database errors
    console.log(err)
    res.status(500).send('Server error')
})

const server = app.listen(process.env.PORT || 3000, function() {  // initializes new variable server that starts server running on env variable (azure port) or local port 3000
    console.log('Express server running on port ', server.address().port)
})