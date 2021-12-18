// server.js
let express = require('express')
let serveStatic = require('serve-static')
let history = require('connect-history-api-fallback')
let sslRedirect = require('heroku-ssl-redirect')

let app = express()
let port = process.env.PORT || 5000

app.use(sslRedirect())
app.use(history())
app.use(serveStatic(__dirname.concat('/dist')))

app.listen(port)
console.log('server started ' + port)
