# Scaffolding for Live Code Practice

https://github.com/flyrightsister/livecode_practice

## To install from scratch:

1. Fork or clone the repo
2. `$ npm install`
3. `$ npm run db:create`
4. `$ npm run db:seed`

## Challenge 1: Pet Names per Species

Create a function in db.js that
takes a species name as a parameter
and returns a Promise that resolves
to an array of pet objects for that
species. Each object should have the
key "name".

Example Promise resolution:

```[ { name: "Astro" },
  { name: "Sandy" } ]```
