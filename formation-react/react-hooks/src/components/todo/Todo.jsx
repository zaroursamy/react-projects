import {useState, useEffect} from 'react';
import AddTask from "./AddTask.jsx";

function Todo() {

    const [todos, setTodos] = useState(
        [
            {id: 1, task: "Buy milk"},
            {id: 2, task: "Buy bread"}
        ]
    )

    const [warning, setWarning] = useState(false)

    useEffect(() => {
        document.title = `You have ${todos.length} tasks`
    }, [todos]); // Only when todos is updated, the hook is called. For only the mount, pass [], for always, pass nothing


    const addTask = (newTask) => {

        if (newTask !== ''){
            setWarning(false)
            setTodos(prev => {
                const maxId = Math.max(...prev.map(v => v.id))

                return [...prev, {id: maxId+1, task: newTask}]

            })
        } else {
            setWarning(true)
        }
    }

    const alertEmptyTask = warning && <div className='alert alert-danger'>Task should not be empty</div>

    return (
        <div className='container align-content-center'>
            {alertEmptyTask}
            <h1 className='text-center'>{todos.length} tasks to do</h1>
            <ul className='list-group'>
                {todos.map(({id, task}) => (
                        <li className='list-group-item' key={id}>{task}</li>
                    )
                )}
            </ul>

            <AddTask addTask={addTask}/>

        </div>
    );
}

export default Todo;
