import React from "react";
import styles from "./button.module.css";

export interface ButtonPropsInterface 
extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
    children,
    className,
    ...rest
}: ButtonPropsInterface) {
    return(
        <button {...rest} className={styles.button + " " + className}>
        {children}
        </button>
    );
}