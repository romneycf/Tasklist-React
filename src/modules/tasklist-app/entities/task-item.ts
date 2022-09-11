import { ButtonHTMLAttributes } from "react";

export interface TaskItem {
    state: "DONE" | "PENDING";
    task: string;
}