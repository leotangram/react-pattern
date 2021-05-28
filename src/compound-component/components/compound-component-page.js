import React from 'react';
import {FinalTodo, TodoForm, TodoList, TodoTitle} from './final-todo';
import {Todo} from './normal-todo';

export const CompoundComponentPage = () => (
  <>
    <h2>Ejemplo sin Compound Component</h2>
    <Todo title="Sin Compound Pattern :o" />
    <hr />

    <h2>Ejemplo con Compound Component</h2>
    <FinalTodo>
      <TodoTitle>
        <h1>Compound Pattern :D</h1>
      </TodoTitle>
      <TodoForm />
      <TodoList />
    </FinalTodo>

    <h2>Ejemplo Variente con Compound Component</h2>
    <FinalTodo>
      <FinalTodo.Title>
        <h1>Compound Pattern :D</h1>
      </FinalTodo.Title>
      <FinalTodo.Form />
      <FinalTodo.List />
    </FinalTodo>
  </>
);
