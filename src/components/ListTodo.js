import React from "react";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import { toast } from "react-toastify";
class ListTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listTodos: [],
            editTodo: {},
        };
    }
    componentDidMount() {
        const listTodos = localStorage.getItem("list-todo");
        // JSON.parse()
        // this.setState({ user, rememberMe });
        console.log(listTodos);
    }
    addNewTodo = (todo) => {
        let currentListTodo = this.state.listTodos;
        currentListTodo.push(todo);
        localStorage.setItem("list-todo", JSON.stringify(currentListTodo));
        this.setState({
            listTodos: currentListTodo,
        });
        // this.setState({
        //     listTodos: [...this.state.listTodos, todo],
        // });
        toast.success("Add task success!!!");
    };
    deleteTodo = (todo) => {
        let currentListTodo = this.state.listTodos;
        currentListTodo = currentListTodo.filter((item) => item.id !== todo.id);
        this.setState({
            listTodos: currentListTodo,
        });
        toast.success("Delete task success!!!");
    };
    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmtyObj = Object.keys(editTodo).length === 0;
        //save
        if (isEmtyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex(
                (item) => item.id === todo.id
            );
            listTodosCopy[objIndex].title = editTodo.title;
            this.setState({
                listTodos: listTodosCopy,
                editTodo: {},
            });
            toast.success("Update task Succeed !!");
            return;
        }
        // edit
        this.setState({
            editTodo: todo,
        });
    };
    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy,
        });
    };
    render() {
        let { listTodos, editTodo } = this.state;
        return (
            <div className="vh-100" style={{ backgroundColor: "#eee" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-lg-9 col-xl-7">
                            <div className="card rounded-3">
                                <div className="card-body p-4">
                                    <h4 className="text-center my-3 pb-3">
                                        To Do App
                                    </h4>
                                    <AddTodo addNewTodo={this.addNewTodo} />
                                    <table className="table mb-4">
                                        <thead>
                                            <tr>
                                                <th scope="col">No.</th>
                                                <th scope="col">Todo item</th>
                                                <th scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {listTodos &&
                                                listTodos.length > 0 &&
                                                listTodos.map((item, index) => {
                                                    return (
                                                        <TodoItem
                                                            deleteTodo={
                                                                this.deleteTodo
                                                            }
                                                            handleEditTodo={
                                                                this
                                                                    .handleEditTodo
                                                            }
                                                            handleOnChangeEditTodo={
                                                                this
                                                                    .handleOnChangeEditTodo
                                                            }
                                                            index={index}
                                                            key={item.id}
                                                            todo={item}
                                                            editTodo={editTodo}
                                                        />
                                                    );
                                                })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default ListTodo;
