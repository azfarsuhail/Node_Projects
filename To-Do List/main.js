import inquirer from "inquirer";
const todos = [];
function displayMenu() {
    inquirer
        .prompt({
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: [
            'Add a Todo',
            'List Todos',
            'Mark Todo as Completed',
            'Delete a Todo',
            'Exit',
        ],
    })
        .then((answers) => {
        handleAction(answers.action);
    });
}
function addTodo() {
    inquirer
        .prompt({
        type: 'input',
        name: 'text',
        message: 'Enter the todo text:',
    })
        .then((answers) => {
        const todo = {
            id: todos.length + 1,
            text: answers.text,
            completed: false,
        };
        todos.push(todo);
        displayMenu();
    });
}
function listTodos() {
    todos.forEach((todo) => {
        console.log(`[${todo.id}] ${todo.completed ? '✅' : '❌'} ${todo.text}`);
    });
    displayMenu();
}
function markTodoCompleted() {
    inquirer
        .prompt({
        type: 'input',
        name: 'id',
        message: 'Enter the ID of the todo to mark as completed:',
    })
        .then((answers) => {
        const id = parseInt(answers.id);
        const todo = todos.find((t) => t.id === id);
        if (todo) {
            todo.completed = true;
        }
        displayMenu();
    });
}
function deleteTodo() {
    inquirer
        .prompt({
        type: 'input',
        name: 'id',
        message: 'Enter the ID of the todo to delete:',
    })
        .then((answers) => {
        const id = parseInt(answers.id);
        const index = todos.findIndex((t) => t.id === id);
        if (index !== -1) {
            todos.splice(index, 1);
        }
        displayMenu();
    });
}
function handleAction(action) {
    switch (action) {
        case 'Add a Todo':
            addTodo();
            break;
        case 'List Todos':
            listTodos();
            break;
        case 'Mark Todo as Completed':
            markTodoCompleted();
            break;
        case 'Delete a Todo':
            deleteTodo();
            break;
        case 'Exit':
            console.log('Goodbye!');
            break;
    }
}
displayMenu();
