console.log('HOLA ');

const initialState = [
    {
        id: 1,
        todo: 'Shop milk',
        done: false
    }
];

const todoRedurer = (state = initialState, action) => {



    return state;

}

let todo = todoRedurer();


const newTodo = {
    id: 2,
    todo: 'Shop shoes',
    done: false
};


const action = payload = {
    type: 'ADD',
    payload
}

todo = todoRedurer(initialState, action)



console.log(todo);