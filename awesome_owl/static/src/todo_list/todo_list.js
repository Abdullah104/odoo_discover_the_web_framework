import { Component, useState } from "@odoo/owl";
import { TodoItem } from "./todo_item";
import { TodoModel } from "./todo_model";

export class TodoList extends Component {
  static template = "awesome_owl.todo_list";
  static components = { TodoItem };

  setup = () => (this.todos = useState([]));

  addTodo = (event) => {
    if (event.keyCode !== 13) return;

    if (!event.target.value) return;

    this.todos.push(
      new TodoModel({
        id: this.todos.length + 1,
        description: event.target.value,
        isCompleted: false,
      })
    );

    event.target.value = "";
  };
}
