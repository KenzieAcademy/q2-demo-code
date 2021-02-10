// Rewrite this as aync await $$$test$$$

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









/////
// Part 2 - unreadable data response
///////

// Here is an async-await version:

// async function getStarship() {
// 	const res = await fetch('https://swapi.dev/api/people/1/')
//   const luke = await res.json()

//   const res2 = await fetch(luke.starships[0])
//   const data = await res2.json()
//   console.log(data)
// }
// getStarship()
