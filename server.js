const http = require('http')
const fs = require('fs')

const server =  http.createServer((req,res) => {
  // console.log(req.url, req.method, req.headers)
  const url = req.url
  const method = req.method
  
  if (url === '/') {
    res.write('<html>')
    res.write('<form action="/submitted" method="POST">')
    res.write('<h1>Enter Text</h1>')
    res.write('<input type="text" name="text">Enter Text</input>')
    res.write('<button>Submit</button>')
    res.write('</form>')
    res.write('</html>')
    return res.end()  
  }
  if (url === '/submitted' && method === 'POST') {
    const body = []
    req.on('data', (chunk) => {
      body.push(chunk)
    })
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const submitted = parsedBody.split('=')[1]
      fs.writeFile('submitted.txt', submitted, (err) => {
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end()
      })
    })
  }
  res.setHeader('Content-Type', 'text/html') 
  res.write('<h1>Thanks</h1>')
  res.end()
})

server.listen(3003)