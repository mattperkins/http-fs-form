const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers)
  // process.exit()
  return res.end()
})

server.listen(3004, () => {
  console.log('listening...')
})
