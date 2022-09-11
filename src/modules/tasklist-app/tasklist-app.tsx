import React, { useState } from "react";
import TaskListAppContent from "./components/tasklist-app-content/tasklist-app-content";
import TasklistAppHeader from "./components/tasklist-app-header/tasklist-app-header";
import { TaskItem } from "./entities/task-item";
import style from "./tasklist-app.module.css";

export default function TasklistApp() {
    const [list, setList] = useState<TaskItem[]>([]);

    const addNewItemToList = (item: TaskItem) => {
        setList((l) => {
            const t = [...l];
            t.push(item);
            return t;
        });
    };

    return (
        <div className={style.container}>
            <TasklistAppHeader addNewTaskItem={addNewItemToList} />
            <TaskListAppContent list={list} setList={setList}/>
        </div>
    );
}