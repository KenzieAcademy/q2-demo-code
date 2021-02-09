const tasks = [
    {
        name: "Write tutorial for blog",
        notes: "This week: forEach/map/filter/some/every",
        duration: 120,
        urgent: false,
        priority: 4,
    },
    {
        name: "Work out",
        notes: "",
        duration: 60,
        urgent: false,
        priority: 5,
    },
    {
        name: "Couch time with Duolingo",
        notes: "",
        duration: 45,
        urgent: false,
        priority: 3,
    },
    {
        name: "Finish weekly email to boss",
        notes: "include notes from Jessica's meeting",
        duration: 30,
        urgent: true,
        priority: 5,
    },
    {
        name: "Make food ahead for next week",
        notes: "need to use the rice",
        duration: 180,
        urgent: false,
        priority: 2,
    },
]

/* Example Task:
{
    name: "Write tutorial for blog",
    notes: "map/filter/some/every",
    duration: 120,
    urgent: false,
    priority: 4,
}
*/

function doForEachItem(item, index) {
    console.log(index, item)
}

// const doForEachItem = function (item, index) {
//     console.log(index, item)
// }

// THE FOREACH METHOD:
tasks.forEach(doForEachItem)
tasks.forEach(function (item, index) {
    console.log(index, item)
})

// THE MAP METHOD:
let taskNames = tasks.map((item) => item.name)

// THE EVERY METHOD:
let everyItemMeetsCondition =
    tasks.every((item) => item.urgent === true)

// THE FILTER METHOD:
let shortTasks = tasks.filter((item) => item.duration < 60)

// THE FIND METHOD:
let foundTask = tasks.find((item) => item.duration < 60)

// THE SOME METHOD:
let containsUrgentTask = tasks.some(item => item.urgent === true)

let tasksForSaturday = tasks
    .filter(task => task.urgent === false)
    .filter(task => task.duration > 60)
    .map(task => task.name)

console.log(tasksForSaturday)