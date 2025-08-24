let todos = [
    {title: "learn 35", done: false},
    {title: "Do homework", done: false},
    {title: "Make a simple project", done: true},
    {title: "Understanding the array", done: true}
];

let doneTodos = [];
let onGoingTodos = [];

todos.forEach(todo => {
    if (todo.done) {
        doneTodos.push(todo)
    } else {
        onGoingTodos.push(todo)
    }  
});


console.log(" Done todos:");
doneTodos.forEach(todo => {
    console.log(`-${todo.title}`)
})

console.log("\n On Going todos:");
onGoingTodos.forEach(todo =>{
        console.log(`-${todo.title}`)
})
        