import React from "react";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";
import { useContext } from "react";
import { TodosContext } from "../store/todos-context";

// function Todos(props: { items: string[]; children: any }) = annoying
// FC = functional component TYPE Use <> = generic object

const Todos: React.FC = () => {
  const todoCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
