import React, {useState} from 'react';
import { TaskType } from './Todolist';
import { FilterValuesType } from './App';
import Button from './Button';

type TaskListPropsType = {
    tasks: Array<TaskType>
    isCheked: (id: string) => void
    removeTask: (taskId: string) => void
    deleteTasks: () => void
} 
export const TaskList: React.FC<TaskListPropsType> = (props) => {
    let tasksForTodolist = props.tasks;
    let [filter, setFilter] = useState<FilterValuesType>("all");

    if (filter === "active") {
        tasksForTodolist = props.tasks.filter(t => t.isDone === false);
    }
    if (filter === "completed") {
        tasksForTodolist = props.tasks.filter(t => t.isDone === true);
    }
    if (filter === "three tasks") {
        tasksForTodolist = props.tasks.filter((t,i) => i <= 2);
    }
    
    const onClickCheked = (id: string) => {
        props.isCheked(id)
    }
   
    const taskList = props.tasks.length 
    ? tasksForTodolist.map(t => <li key={t.id}>
            <input onChange={()=>onClickCheked(t.id)} type="checkbox" checked={t.isDone}/>
            <span>{t.title}</span>
            <Button callback={() => props.removeTask(t.id)} name='x'/>
        </li>)
    :<li>List empty</li>


    return (
      <>
        <ul>{taskList}</ul>
        <div>
          <Button name='Delete all the Tasks' callback={() => props.deleteTasks()} />
          <Button name='All' callback={() => setFilter("all")} />
          <Button name='Active' callback={() => setFilter("active")} />
          <Button name='Completed' callback={() => setFilter("completed")} />
          <Button name='first three tasks' callback={() => setFilter("three tasks")} />
        </div>
      </>
    );
}