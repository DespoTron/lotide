# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @t.do/lotide`

**Require it:**

`const _ = require('@t.do/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: A function that asserts if two arrays are equals
* `assertEqual`: A function that asserts if two values are equals
* `assertObjectsEqual`: A function that asserts if two objects are equals
* `countLetters`: A function that returns the count of each letter of a string
* `countOnly`: A function that takes items and returns counts for a specfic subset of those items
* `eqArrays`: A function that compares two arrays
* `eqObjects`: A function that compares two objects
* `findKey`: A function that searches an object and returns the first key from which the callback returns a truthy value
* `findKeyByValue`: A function that searches for a key in an object and returns the matching value of a given value
* `flatten`: A function that flattens nested arrays into one array
* `head`: A function that returns the first element in an array
* `index`: A list of all the function in an object
* `letterPositions`: A function that returns an array with the indexs of a string of where they were found
* `map`: A function that creates a new array that returns the results by calling a callback function
* `middle`: A function that returns the middle element(s) of an array
* `tail`: A function that that returns every element of an array except the first one(first element)
* `takeUntil`: A function that returns a slice of the array with elements taken from the beginning
* `without`: A function that removes elements from an array