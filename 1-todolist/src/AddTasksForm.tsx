import React, {useState} from 'react';
import Button from './Button';

type AddTasksFormType = {
    addNewTask: (newTask: string) => void
}
export const AddTasksForm: React.FC<AddTasksFormType> = (props) => {
    const [textValue, setTextValue] = useState('');
    const onChangeHandler = (value: string) => {
     setTextValue(value)
    }
    const onClickHandler = () => {
        setTextValue('')
        props.addNewTask(textValue)
    }
    const onClickHandlerEnter = (event: string) => {
        event === 'Enter' && onClickHandler()
    }
    return (
        <div>
        <input  onKeyPress={(e) => onClickHandlerEnter(e.key)}  value={textValue} onChange={ e => onChangeHandler(e.currentTarget.value)}/>
        { textValue.length > 10 && <div>Ты чо</div>}
        <Button disabled={ textValue.length === 0 ? true : false} callback={onClickHandler} name='+' />
    </div>
    )
}