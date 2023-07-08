import React from 'react';

type TaskTitlePropsType = {
title: string;
} 
export const TaskTitle: React.FC<TaskTitlePropsType> = (props) => {
    return (
        <h3>{props.title}</h3>
    )
}