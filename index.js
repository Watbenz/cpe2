const express = require('express')
const app = express()
const port = 5424

app.get('/', (req, res) =>
  res.send('Greetings from watbenz...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
