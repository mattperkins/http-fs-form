const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  // console.log(req.url, req.method, req.headers)
  // process.exit()
  const url = req.url
  const method = req.method
  if (url === '/') {
    res.write('<html>')
    res.write('<head><title>Enter Message</title></head>')
    res.write('<body><form action="/message" method="POST">')
    res.write('<input type="text" name="message">')
    res.write('<button type="submit">Send</button>')
    res.write('</form></body>')
    res.write('</html>')
    return res.end()
  }
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', '...')
    res.statusCode = 302
    res.setHeader('Location', '/')
  }
  res.setHeader('Content-type', 'text/html')
  res.write('<html>')
  res.write('<head><title>Message Sent</title></head>')
  res.write('<body><h1>Message Sent</h1></body>')
  res.write('</html>')
  res.end()
})

server.listen(3004, () => {
  console.log('listening...')
})
