const pgp = require('pg-promise')()

// const connection = { host: 'localhost', port: 5432, db: 'pets' }
const connection = process.env.NODE_ENV === 'test'
  ? 'postgres:///pets_test'
  : 'postgres:///pets'
const db = pgp(connection)

/**
 * Gets pets and species from db
 * @return {Promise} - resolves to array of objects, each with keys 'name' and 'species_name'
 */
const getPetsAndSpecies = () => {
  const query = `SELECT p.name, s.species_name
                  FROM pets AS p
                  JOIN species AS s
                    ON s.species_id = p.species_id
                `
  return db.any(query)
}

/**
 * Update a pet's name in the database
 * @param  {number} petId - id of the pet to update
 * @param  {string} newName - new name for pet
 * @return {Promise} - resolves to object with keys 'success' and 'message'
 */
const updatePetName = (petId, newName) =>
  db.oneOrNone('UPDATE pets SET name=$1 WHERE pet_id=$2 RETURNING pet_id', [newName, petId])
    .then((returnedId) => {
      if (returnedId) return { success: true, message: '' }
      return { success: false, message: `Could not find petId ${petId}` }
    })
    .catch(err => Object({ success: false, message: err.message }))

/**
 * Get pet names for a particular species name.
 *
 * @param {string} speciesName - Name of the species for which to get pet names
 * @returns {Promise} - resolves to an array of objects, each having the key 'name'
 */
const getPetsOfSpecies = (speciesName) => {
  return db.any(`
    SELECT p.name
    FROM species AS s
      JOIN pets AS p
      ON p.species_id = s.species_id
    WHERE s.species_name = $1`,
    [speciesName])
}

// getPetsOfSpecies('dog')
//   .then(console.log)

/**
 * Add a pet to the database with the specified species.
 *
 * @param {string} petName - Name of pet to add
 * @param {string} speciesName - Species of pet to add
 * @returns {Promise} - Returns a promise resolving to an object with the key 'pet_id'
 */
const addPet = (petName, speciesName) => {
  return db.one(`
    SELECT species_id
    FROM species
    WHERE species_name = $1`,
    [speciesName])
    .then((species) => {
      return db.query(`
       INSERT INTO pets
        (name, species_id)
       VALUES
        ($1, $2)
       RETURNING pet_id`,
      [petName, species.species_id])
    })
}

// addPet('Snarfy', 'dog')
//   .then(console.log)
//   .catch(console.error)

/**
 * Get pet names for a particular owner name.
 *
 * @param {string} ownerName - Name of the owner for which to get pet names
 * @returns {Promise} - resolves to an array of objects, each having the key 'name'
 */
const getPetsByOwner = (ownerName) => {
  return db.any(`
    SELECT p.name
    FROM pets AS p
      JOIN petowners as po
        ON po.pet_id = p.pet_id
      JOIN owners AS o
        ON po.owner_id = o.owner_id
    WHERE o.name = $1`,
    [ownerName])
}

// getPetsByOwner('Hermione Granger')
//   .then(console.log)
//   .catch(console.error)



module.exports = {
  db,
  getPetsAndSpecies,
  updatePetName,
  getPetsOfSpecies,
}
