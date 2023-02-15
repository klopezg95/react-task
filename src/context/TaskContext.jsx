import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks'

export const TaskContext = createContext()
export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([]);

    function createTask(task) {
        setTasks([...tasks, {
            title: task.title,
            id: tasks.length,
            description: task.description
        }]);
        console.log(tasks)
    }

    function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId));
        console.log(tasks)
    }

    useEffect(() => {
        setTasks(data)
    }, [])

    return (
        <TaskContext.Provider value={{
            tasks: tasks,
            deleteTask: deleteTask,
            createTask: createTask
        }} >
            {props.children}
        </TaskContext.Provider>
    )
}

