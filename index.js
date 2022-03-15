const express = require('express')
const multiply = require('./multiply');

const app = express()

app.get('/7times/:multiplicand', (req, res) => {
  const multiplicand = Number(req.params.multiplicand)
  const result = multiply(7, multiplicand)
  res.send(`7 multiplied by ${multiplicand} is ${result}`)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
