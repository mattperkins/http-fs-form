const http = require('http')

const routes = require('./routes')

const server = http.createServer(routes)

server.listen(3004, () => {
  console.log('listening...')
})
