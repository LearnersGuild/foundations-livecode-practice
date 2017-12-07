const expect = require('chai').expect
const { db, getPetsAndSpecies, updatePetName } = require('../db/db')
const { resetDB } = require('./utilities/dbUtilities')

describe('getPetsAndSpecies()', () => {
  const petsAndSpecies = getPetsAndSpecies()
  beforeEach('reset the db', resetDB)
  it('should return the correct number of results', () =>
    petsAndSpecies.then(results =>
      expect(results.length).to.equal(1)
    )
  )
  it('should find Astro', () =>
    petsAndSpecies.then(results =>
      expect(results[0].name).to.equal('Astro')
    )
  )
  it('should find a dog', () =>
    petsAndSpecies.then(results =>
      expect(results[0].species_name).to.equal('dog')
    )
  )
})

describe('updatePetName() success', () => {
  const petId = 1
  const newName = 'Fluffy'
  beforeEach('reset the db', resetDB)
  it('should update the name to the new name', () =>
    updatePetName(petId, newName).then(() =>
      db.one('SELECT name FROM pets WHERE pet_id=$1', petId)
        .then((pet) => {
          expect(pet.name).to.equal(newName)
        })
    )
  )
  it('should set success to true when successful', () =>
    updatePetName(petId, newName).then(response =>
      expect(response.success).to.be.true
    )
  )
})
context('failure', () => {
  const updateFail = updatePetName(45, 'Fluffy')

  it('should set success to false when unsuccessful', () =>
    updateFail.then(response =>
      expect(response.success).to.be.false
    )
  )
  it('should return a specific error message when petID doesn\'t exist', () =>
    updateFail.then(response =>
      expect(response.message).to.equal('Could not find petId 45')
    )
  )
})
