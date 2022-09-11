import React from "react";
import styles from "./input.module.css";

export interface InputPropsInterface
extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input ({
    children,
    className,
    ...rest
}: InputPropsInterface) {
    return (
        <input {...rest} className={styles.input + " " + className}>
            {children}
        </input>
    );
}