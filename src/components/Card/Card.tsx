import React from "react";
import styles from "./Card.module.css";

const CardComponent: React.FC<{ children?: React.ReactNode; className?: string }> = (
  props
) => {
  return (
    <div className={`${styles.card} ${styles[props.className]}`}>
      {props.children}
    </div>
  );
};

export default CardComponent;
