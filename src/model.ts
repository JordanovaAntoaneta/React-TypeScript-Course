export interface Todo{
    id: number;
    todo: string;
    isDone: boolean;
}


// type Actions = 
//     | {type: 'add', payload: string}
//     | {type: 'remove', payload: number}
//     | {type: 'addoned', payload: number}

// const TodoReducer = (state: Todo[], action: Actions) => {
//     switch(action.type) {
//         case 'add':
//             return [...state, {id: Date.now(), todo: action.payload, isDone: false}]
//         case 'remove':
//         case 'addoned':
//     }
// }

// import React, { useReducer } from 'react'
// const ReducerExample = () => {
//   const [state, dispatch] = useReducer(TodoReducer, [])
// }

// export default ReducerExample
