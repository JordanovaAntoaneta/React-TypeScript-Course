import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import TodoList from './components/TodoLIst';
import { DragDropContext, DropResult } from 'react-beautiful-dnd';

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("");

  const [todos, setTodos] = useState<Todo[]>([]);

  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if(todo){
      setTodos([...todos, {id:Date.now(), todo, isDone: false}]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const {source, destination} = result;
    console.log(result);
    if(!destination) return;
    if(destination.droppableId===source.droppableId && destination.index===source.index) return;

    let add: Todo, active = todos, complete=completedTodos;

    if(source.droppableId==='TodosList'){
      add = active[source.index]
      active.splice(source.index, 1);
    }else{
      const removed = complete.splice(source.index,1);
      if(removed.length > 0 && removed.at(0) !== undefined){
        add = removed.at(0) as Todo;
      }
      else{
        add = {id: -1, isDone: false, todo: "default"};
      }
    }

    if(destination.droppableId==='TodosList'){
      console.log("pagja vo if ")
      active.splice(destination.index, 0, add);
    }else{
      console.log("pagja vo else ", add, destination, destination.index)
      complete.splice(0, 0, add);
      // complete = splice(destination.index, 0, add);
      console.log("pagja vo else  1", complete)
    }

    setCompletedTodos(complete)
    setTodos(active);

  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}></InputField>
      <TodoList
        todos={todos} 
        setTodos={setTodos} 
        completedTodos={completedTodos}
        setCompletedTodos={setCompletedTodos}
      />
    </div>
    </DragDropContext>
    
  );
}

export default App;
function splice(index: number, arg1: number, add: Todo | Todo[]): Todo[] {
  throw new Error('Function not implemented.');
}

