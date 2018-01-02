const express = require('express')
const bodyParser = require('body-parser')
const { getPetsAndSpecies, addPet, getPetsByOwner } = require('./db/db.js')

const app = express()
app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  getPetsAndSpecies()
    .then((pets) => {
      res.render(
        'pets',
        { pets }
      )
    })
    .catch(console.error)
})

app.get('/api/owners/pets', (req, res) => {
  const ownerName = req.query.ownerName

  getPetsByOwner(ownerName)
  .then((pets) => {
    res.render('pets', {pets})
  })
  .catch((error) => {
    res.json({'message': error.toString()})
  })
})

app.post('/api/pets/add', (req, res) => {
  const { petName, speciesName } = req.body
  addPet(petName, speciesName)
    .then(result => {
      res.json(result)
    })
    .catch(error => {
      res.status(404).json({'message': error.toString()})
    })
})

app.listen(3000, () =>
  console.log('Example app listening on port 3000!')
)
