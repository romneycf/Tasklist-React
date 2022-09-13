import React, { useState } from "react";
import Button from "../../../../components/button/button";
import Input from "../../../../components/input/input";
import { TaskItem } from "../../entities/task-item";
import style from "./tasklist-app-header.module.css";

export interface TasklistAppHeaderInterface {
    addNewTaskItem: (item: TaskItem) => void;
}

export default function TasklistAppHeader({
    addNewTaskItem,
}: TasklistAppHeaderInterface) {
    const [task, setTask] = useState<string>("");
    const [error, setError] = useState<string>("");

    const isValidTask = (task: string): boolean => {
        if (!task){
            return false;
        }

        if (!task.trim()) {
            return false;
        }
        return true;
    };

    const handleCreateTaskButton = () => {
        if (!isValidTask(task)) {
            setError("Não é uma tarefa válida!");
            return;
        }
        addNewTaskItem({
            state: "PENDING",
            task: task.trim(),
            disabled: true,
        });
        setTask("");
    };

    const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.value) {
            setError("");
        }
        setTask(event.target.value);
    };

    return (
        <div className={style.container}>
            <div className={style.inputWrapper}>
                <Input
                type="text"
                placeholder="What needs to be done?"
                value={task}
                onChange={handleOnChangeInput}
                />
                {error ? <span className={style.error}>{error}</span> : <></>}
            </div>
            <Button className={style.addButton} onClick={handleCreateTaskButton}>+ Add</Button>
        </div>
    );

}