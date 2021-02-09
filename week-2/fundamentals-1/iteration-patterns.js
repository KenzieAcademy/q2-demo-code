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

// THE FOREACH PATTERN:
for (let index = 0; index < tasks.length; index += 1) {
    let task = tasks[index]
    doForEachItem(task, index)
}

// THE MAP PATTERN:
let taskNames = []
for (let index = 0; index < tasks.length; index += 1) {
    let task = tasks[index]
    taskNames.push(task.name)
}

// THE EVERY PATTERN:
let everyItemMeetsCondition = true
for (let index = 0; index < tasks.length; index += 1) {
    let task = tasks[index]

    if (task.urgent === true) {
        continue
    } else {
        everyItemMeetsCondition = false
        break
    }
}

// THE FILTER PATTERN:
let shortTasks = []
for (let index = 0; index < tasks.length; index += 1) {
    let task = tasks[index]
    if (task.duration < 60) {
        shortTasks.push(task)
    }
}

// THE FIND PATTERN:
let foundTask = null
for (let index = 0; index < tasks.length; index += 1) {
    let task = tasks[index]
    if (task.duration < 60) {
        foundTask = task
    }
}

// THE SOME PATTERN:
let someItemMeetsCondition = true
for (let index = 0; index < tasks.length; index += 1) {
    let task = tasks[index]

    if (task.urgent === true) {
        someItemMeetsCondition = true
        break
    } else {
        continue
    }
}
