import React from 'react';
import Apptodo from './Pockemons';

export const Todo = ({ todos }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div keq={todo.id}>
          <span>{todos.content}</span>
        </div>
      );
    })
  ) : (
    <p> you have no todos </p>
  );
  return <div>{todoList}</div>;
};

export {Pockemons};