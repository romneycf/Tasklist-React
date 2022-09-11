import React, { ReactNode } from "react";
import styles from "./centered-layout.module.css";

export default function CenteredLayout( { children }: { children: ReactNode}) {
    return <div className={styles.container}>{children}</div>
}