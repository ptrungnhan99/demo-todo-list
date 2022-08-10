import React from "react";
class TodoItem extends React.Component {
    constructor(props) {
        super(props);
    }
    handleDeleteTodo = (todo) => {
        this.props.deleteTodo(todo);
    };
    handleEditTodo = (todo) => {
        this.props.handleEditTodo(todo);
    };
    handleChangeEdit = (event) => {
        // let value = event.target.value;
        this.props.handleOnChangeEditTodo(event);
    };
    render() {
        let { todo, index, editTodo } = this.props;
        let isEmtyObj = Object.keys(editTodo).length === 0;
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                {isEmtyObj === true ? (
                    <td>{todo.title}</td>
                ) : (
                    <>
                        {editTodo.id === todo.id ? (
                            <td>
                                <input
                                    type="text"
                                    value={editTodo.title}
                                    onChange={(event) =>
                                        this.handleChangeEdit(event)
                                    }
                                />
                            </td>
                        ) : (
                            <td>{todo.title}</td>
                        )}
                    </>
                )}
                <td>
                    <button
                        type="submit"
                        className="btn btn-success"
                        onClick={() => this.handleEditTodo(todo)}
                    >
                        {isEmtyObj === false && editTodo.id === todo.id
                            ? "Save"
                            : "Edit"}
                    </button>
                    <button
                        type="submit"
                        className="btn btn-danger ms-1"
                        onClick={() => this.handleDeleteTodo(todo)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}
export default TodoItem;
