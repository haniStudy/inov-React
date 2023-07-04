// action value
const CREATE_TODO = "todoList/CREATE_TODO";
const DELETE_TODO = "todoList/DELETE_TODO";
const UPDATE_TODO = "todoList/UPDATE_TODO";

// action creator
export const createTodo = (payload) => {
    // console.log(payload);
    return {
        type: CREATE_TODO,
        payload
    }
}

export const deleteTodo = (payload) => {
    // console.log(payload);
    return {
        type: DELETE_TODO,
        payload
    }
}

export const updateTodo = (payload) => {
    // console.log(payload);
    return {
        type: UPDATE_TODO,
        payload
    }
}

// 초기 상태값
export const initialState = {
    todo: [],
};

// reducer
const todoList = (state = initialState, action) => {
    // console.log(action.payload);
    // console.log(state);
    // console.log(state.todo);
    switch (action.type) {
        case CREATE_TODO:
            return {
                todo: [...state.todo, { uuid: crypto.randomUUID(), title: action.payload.title, content: action.payload.content, isDone: false }],
            }
        case DELETE_TODO:
            return {
                todo: state.todo.filter((item) => { return item.uuid !== action.payload })
            }
        case UPDATE_TODO:
            // console.log(action.payload);
            // console.log(state.todo);
            let copyList = [...state.todo];
            let index = state.todo.findIndex(item => item.uuid === action.payload);
            copyList[index] = { ...copyList[index], isDone: !copyList[index].isDone };

            return {
                todo: [...copyList]
            }

            // return {
            //     todo: state.todo.map(item => {
            //         if (item.uuid === action.payload) {
            //             return { ...item, isDone: !item.isDone };
            //         }
            //         return state.todo;
            //     })
            // }
        default:
            return state;
    }
}

export default todoList;