import ListTodo from "./components/ListTodo";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
    return (
        <div className="App">
            <ListTodo />
            <ToastContainer />
        </div>
    );
}

export default App;
