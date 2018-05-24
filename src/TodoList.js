import React, { Component } from "react";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement !== "") {
      let newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement = "";
    }
    console.log(this.state.items);

    e.preventDefault();
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={a => {
                this._inputElement = a;
              }}
              placeholder="enter task"
              required
            />
            <button type="submit">add</button>
          </form>
        </div>
        <div>
          <TodoItems entries={this.state.items} />
        </div>
      </div>
    );
  }
}

export default TodoList;
