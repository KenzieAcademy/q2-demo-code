// Example with creating promises

const p = new Promise((resolve, reject) => {
    reject()
})

p.then(() => {
    console.log('It worked!')
})
p.catch((err) => {
    console.error('It failed!', err)
})



/////
// Part 2 - unreadable data response
///////

// Example using the fetch API which returns a promise
// Note: this example should be run from a browser
// https://swapi.dev/api/people/

// The API request can be resolved or rejected

// fetch('https://swapi.dev/api/people/')
//     .then((res) => {
//         console.log(res)
//     })

// or, rejected

// fetch('httpps://swapi.dev/api/people/')
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => {
//     	console.log('an error', err)
//     })



/////
// Part 3 - get json from response
///////

// fetch('https://swapi.dev/api/people/')
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })



/////
// Part 4 - chain promises with Luke Skywalker
///////

// fetch('https://swapi.dev/api/people/1/')
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         return fetch(data.starships[0])
//     })
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         console.log(data)
//     })



/////
// Part 5 - using data outside of promises
///////

// How can you get the data variable outside of the promises???

// let starship = {}

// function setStarship(data) {
//     starship = data
//     console.log(starship)
// }

// fetch('https://swapi.dev/api/people/1/')
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         return fetch(data.starships[0])
//     })
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         starship = data
//     })

// console.log(starship) // ???



/////
// Part 6
///////

// let starship = {}

// function setStarship(data) {
//     starship = data
//     console.log(starship)
// }

// fetch('https://swapi.dev/api/people/1/')
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         return fetch(data.starships[0])
//     })
//     .then((res) => {
//         return res.json()
//     })
//     .then((data) => {
//         setStarship(data)
//     })
//     .finally(() => {
//         console.log('we are done!')
//     })

// This works, but there is a cleaner way to do this: async-await
