# Scaffolding for Live Code Practice

https://github.com/flyrightsister/livecode_practice

## To install from scratch:

1. Fork or clone the repo
2. `$ npm install`
3. `$ npm run db:create`
4. `$ npm run db:seed`

## Database ERD

![Database ERD](https://github.com/LearnersGuild/foundations-livecode-practice/blob/master/pets/pets%20ERD.png)

## Challenge 1: Pet Names per Species

Create a function in db.js that
takes a species name as a parameter
and returns a Promise that resolves
to an array of pet objects for that
species. Each object should have the
key "name".

Example Promise resolution:

```javascript
[ { name: "Astro" },
  { name: "Sandy" } ]
```

## Challenge 2: Add a pet

Create a function in `db.js` that takes a pet name and a species name as parameters, adds the pet to the database with the provided species, and returns a Promise that resolves to the id of the new pet in the db. For the purposes of this challenge, you can assume: 

  - The pet __does not__ exist in the database
  - The species __does__ exist in the database

Example result: 

```javascript
{
  pet_id: 4
}
```

- [ ] __5:__ The function takes two parameters: pet name and species name.
- [ ] __10:__ The function has a query that looks up the id for the species.
- [ ] __10:__ The function has another query that adds the pet using the species id.
- [ ] __10:__ The function returns a Promise that resolves to the id of the new pet.

## Challenge 3: Display pets per species in Express

Create a GET route for `/:speciesname/pets` that renders a page with pet names for a particular species. Use the function written in __Challenge 1__.

- [ ] __5:__ Route uses GET
- [ ] __10:__ Route uses function from `db.js` to get the necessary data
- [ ] __10:__ Route renders `species.pug` OR `species.ejs` template
- [ ] __10:__ Rendered page includes the name of the species in the `<title>` tag and a `<h1>` tag
- [ ] __15:__ Rendered page includes the names of the pets for the species in question

## Challenge 4: Pet Names per Owner

Create a function in db.js that
takes an owner name as a parameter
and returns a Promise that resolves
to an array of pet objects for that
species. Each object should have the
key "name".

Example Promise resolution:

```javascript
[ { name: "Astro" },
  { name: "Sandy" } ]
```