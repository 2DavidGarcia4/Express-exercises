const express = require("express")

const app = express()

app.get('/m', (req, res)=> {
  res.send('Hello')
})

app.get('/me', (req, res)=> {
  res.send({name: 'David', age: 18, country: 'Mexico'})
})

app.post('/hobbies', (req, res)=> {
  res.send(['Programar', 'Crear chat bots', 'Ver YouTube'])
})

app.patch('/metas', (req, res)=> {
  res.send(['Conseguir trabajo como programador.', 'Aprender python y Django'])
})

app.put('/business', (req, res)=> {
  res.send(['Mercadolibre', 'Discord', 'Amazon'])
})

app.listen(4000, ()=> {
  console.log('Server runing in port 4000')
})