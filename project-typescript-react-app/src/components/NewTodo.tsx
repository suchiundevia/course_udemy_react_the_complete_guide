import React, { useRef, useContext } from "react";
import { UserPreferences } from "typescript";
import { TodosContext } from "../store/todos-context";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const enteredTodoText = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = enteredTodoText.current!.value;

    if (enteredText?.trim().length === 0) {
      return;
    }
    todoCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo Text</label>
      <input type="text" id="text" ref={enteredTodoText} />
      <button>Add Todo</button>
    </form>
  );
};
export default NewTodo;
