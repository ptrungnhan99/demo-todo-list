import React from "react";
import { toast } from "react-toastify";
class AddTodo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
        };
    }
    handleChangeInput = (event) => {
        this.setState({
            title: event.target.value,
        });
    };
    handleAddTodo = () => {
        if (!this.state.title) {
            toast.error("Missing title!");
            return;
            //if(undefined/null/emty) --> false
        }
        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: this.state.title,
        };
        this.props.addNewTodo(todo);
        this.setState({
            title: "",
        });
    };
    render() {
        let { title } = this.state;
        return (
            <div className="row row-cols-lg-auto g-3 justify-content-center align-items-center mb-4 pb-2">
                <div className="col-12">
                    <div className="form-outline">
                        <input
                            type="text"
                            id="form1"
                            className="form-control"
                            placeholder="Add New task"
                            value={title}
                            onChange={(event) => this.handleChangeInput(event)}
                        />
                    </div>
                </div>
                <div className="col-12">
                    <button
                        className="btn btn-primary"
                        onClick={() => this.handleAddTodo()}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
}
export default AddTodo;
