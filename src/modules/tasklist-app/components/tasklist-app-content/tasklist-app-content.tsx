import React, { ReactNode } from "react";
import { TaskItem } from "../../entities/task-item";
import TaskListAppContentHeader from "./tasklist-app-content-header/tasklist-app-content-header";
import TaskListAppContentList from "./tasklist-app-content-list/tasklist-app-content-list";
import style from "./tasklist-app-content.module.css";

export default function TaskListAppContent({
  list,
  setList,
}: {
  list: TaskItem[];
  setList: React.Dispatch<React.SetStateAction<TaskItem[]>>;
}) {
  return (
    <div className={style.wrapper}>
      <TaskListAppContentHeader />
      <hr className={style.border}></hr>
      <TaskListAppContentList list={list} setList={setList} />
    </div>
  );
}
