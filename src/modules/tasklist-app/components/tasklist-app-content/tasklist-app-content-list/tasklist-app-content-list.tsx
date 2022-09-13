import React, { ReactNode } from "react";
import Button from "../../../../../components/button/button";
import { TaskItem } from "../../../entities/task-item";
import style from "./tasklist-app-content-list.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons";
import Input from "../../../../../components/input/input";

export default function TaskListAppContentList({
  list,
  setList,
}: {
  list: TaskItem[];
  setList: React.Dispatch<React.SetStateAction<TaskItem[]>>;
}) {
  const handleTrashButton = (index: number) => () => {
    const newlist = [...list];
    newlist.splice(index, 1);
    setList(newlist);
  };

  const handleEditButton = (index: number) => () => {  
    console.log(list[index]);
    list[index].disabled = false;
    
  };

  return (
    <div className={style.container}>
      {list.map((item, index) => (
        <li className={style.lista} key={index}>
          <div className={style.list_description_wrapper}>
            <input type="checkbox" />
            <FontAwesomeIcon className={style.status} icon={faMinus} />
            <FontAwesomeIcon icon={faSquareCheck} />
            <Input value={item.task} disabled={item.disabled}>
            </Input>
          </div>
          <div className={style.list_buttons_wrapper}>
            <Button
              className={style.editButton}
              onClick={handleEditButton(index)}
            >
              <FontAwesomeIcon icon={faPencilAlt} />
            </Button>
            <Button
              className={style.trashButton}
              onClick={handleTrashButton(index)}
            >
              <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
          </div>
        </li>
      ))}
    </div>
  );
}
