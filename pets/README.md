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
owner. Each object should have the
key "name".

Example Promise resolution:

```javascript
[ { name: "Astro" },
  { name: "Sandy" } ]
```

## Challenge 5: Associate a Pet and Owner

Create a function in `db.js` that takes a pet name and an owner name as parameters. The function should associate the pet with the provided owner and return a promise that resolves to an object representing the new petowners row in the db. The object should contain the keys 'petowner_id', 'pet_id', and 'owner_id'.

For the purpose of this challenge, you can assume the pet and owner already exist in the database and have not yet been associated.

Example Promise resolution:
```javascript
{ petowner_id: 7,
  pet_id: 1,
  owner_id: 3 }
```

## Challenge 6: List all owners who have zero pets

Write a function in db.js that takes no arguments and returns a Promise that resolves to an array of objects. Each object should represent an owner and have one key: 'name'.

__Note__: It would be a good idea to add an owner to the database at this point, and not add a pet for them, so that you know the query will return at least one result. You can add the owner with a direct SQL query in `psql` or Postico; no need to add a new owner as part of the function.

```sql
INSERT INTO owners (name) VALUES ('Jay-Z')
```

- [ ] __5:__ The function takes no parameters.
- [ ] __10:__ The function has a query that looks up pet owners who have no pets.
- [ ] __10:__ The function returns a Promise that resolves to an array of the pet-less owners.


Example Promise resolution:

```javascript
[
  { name: 'Jay-Z' }
]
```

## Challenge 7: Species boxes grey on mouseover

For the `/` route for this app, write JavaScript that turns the background of any cell containing the species name gray (#eee) on mouseover, and returns it to white on mouseout.

You may use vanilla JS or jQuery.

- [ ] __10:__ Each species table cell has at least one event listener.
- [ ] __10:__ The cell background turns gray (#eee) when the mouse is over the cell.
- [ ] __10:__ The cell background returns to white when the mouse leaves the cell.
- [ ] __10:__ The JavaScript is contained in a separate file from the HTML.

## Challenge 8: Change the title

When you click the "Change Title" button, change the title (what's in the h1 tag) of the page from "Pets" to "Super Pets"

- [ ] __10:__ The button has an event listener.
- [ ] __10:__ When the button is clicked, the page header changes from "Pets" to "Super Pets".

Extra credit
Click the button again to change the title back to "Pets"

- [ ] __10:__ The text of the button changes to "Change title back".
- [ ] __10:__ The title changes back when clicked.
- [ ] __10:__ The button text and functionality toggles back and forth every time you click button.

## Challenge 9: Create a GET route

Create a GET route `/api/owners/pets` that takes a query string parameter `ownerName` and displays all pets with that owner using a pug or EJS template.

Use the `getPetsByOwner` function in `db.js` to get the data from the db.

- [ ] __5:__ The route uses GET.
- [ ] __10:__ The route accesses the query string value for `ownerName`
- [ ] __10:__ The route uses `getPetsByOwner` to get the data.
- [ ] __10:__ The route renders a .pug or .ejs template.
- [ ] __15:__ The route displays all pets for the provided owner

## Challenge 10: POST route to add pet

Create a POST route `/api/pets/add` that takes a pet name (`petName`) and a species name (`speciesName`) as JSON data and adds the pet to the database. Use the `addPet` function from `db.js` to add the pet. The route should return JSON data returning the ID of the new pet with the key `petId`. The route should return a status of 404 and an error message if the pet was not added to the db.

For the purposes of this challenge assume the pet does not exist in the db and the species does.

Example input data:

```json
{
  "petName": "Fluffy",
  "speciesName": "cat"
}
```

Example response: 

```json
{
  "petId": 12
}
```

- [ ] __5:__ The route uses POST.
- [ ] __10:__ The route accesses the posted data
- [ ] __10:__ The route uses `petId` to add the pet.
- [ ] __10:__ The route returns the petId in the case of success.
- [ ] __10:__ The route returns 404 status and error message in the case of error.