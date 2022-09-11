import React, { ReactNode } from "react";
import { TaskItem } from "../../../entities/task-item";
import style from "./tasklist-app-content-header.module.css";

export default function TaskListAppContentHeader() {
  return <span className={style.title}>Todo List</span>;
}
