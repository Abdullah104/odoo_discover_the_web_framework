import { Component, useState } from "@odoo/owl";
import { TodoItem } from "./todo_item";
import { TodoModel } from "./todo_model";

export class TodoList extends Component {
  static template = "awesome_owl.todo_list";
  static components = { TodoItem };

  setup = () =>
    (this.todos = useState([
      new TodoModel({
        id: 2,
        description: "write tutorial",
        isCompleted: false,
      }),
      new TodoModel({ id: 3, description: "buy milk", isCompleted: false }),
    ]));
}
