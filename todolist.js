let todos = [
    {
        text: 'todo1',
        completed: false,
    },
    {
        text: 'todo2',
        completed: true,
    }
]

const generateTodo = function(todo) {
    const p = document.createElement('p')
    p.textContent = todo.text
    return p
}

const renderTodos = function(todos) {
    document.querySelector('#todos').innerHTML = ""
    todos.forEach(function(todo)
    {
        document.querySelector('#todos')
        .appendChild(generateTodo(todo))
    })
}

const saveTodo = function() {

}

document.querySelector('#new-todos')
    .addEventListener('submit', function(e) {
        e.preventDefault()
        todos.push({
            text: e.target.elements.text.value,
            completed: false
        })
        renderTodos(todos)
        e.target.elements.text.value = ""
    })

renderTodos(todos)