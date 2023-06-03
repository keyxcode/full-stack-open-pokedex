const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.get('/version', (_req, res) => {
  res.send('1')
})

app.get('/health', (req, res) => {
  res.send('ok')
})

app.listen(PORT, () => {
  throw 'error...'
  // eslint-disable-next-line no-unreachable
  console.log('server started on port 5001')
})
