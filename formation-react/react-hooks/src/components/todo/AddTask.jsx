import {useState} from 'react';

function AddTask({addTask}) {


    const [task, setTask] = useState({
        value: ''
    })


    const updateCurrentTaskFromTextArea = (e) => setTask( {
            value: e.target.value
        }
    )

    const submitTask = (event) => {
        event.preventDefault()
        addTask(task.value)
        setTask({value: ''})
    }

    return (
        <form className='mt-4' onSubmit={submitTask}>
            <div className='card card-body mt-5'>
                <label>Add task</label>
                <input className='form-control' type='text' value={task.value} onChange={updateCurrentTaskFromTextArea} ></input>
                <input className='btn btn-primary mt-4' type='submit' />
            </div>
        </form>

    );
}

export default AddTask;