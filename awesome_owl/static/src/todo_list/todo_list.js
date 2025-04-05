import { Component, useState, useRef } from "@odoo/owl";

import { TodoItem } from "./todo_item";
import { TodoModel } from "./todo_model";

import { useAutoFocus } from "../utils";

export class TodoList extends Component {
  idCounter = 1;

  static template = "awesome_owl.todo_list";
  static components = { TodoItem };

  setup = () => {
    this.todos = useState([]);
    this.inputRef = useRef("input");

    useAutoFocus(this.inputRef);
  };

  addTodo = (event) => {
    if (event.keyCode !== 13) return;

    if (!event.target.value) return;

    this.todos.push(
      new TodoModel({
        id: this.idCounter++,
        description: event.target.value,
        isCompleted: false,
      })
    );

    event.target.value = "";
  };

  toggleState = (todo) => (todo.isCompleted = !todo.isCompleted);

  removeTodo = (todo) =>
    this.todos.splice(
      this.todos.findIndex((element) => element.id === todo.id),
      1
    );
}
