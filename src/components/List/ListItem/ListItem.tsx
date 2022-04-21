import React from "react";
import { Post } from "../types";
import styles from "./ListItem.module.css";

const ListItemComponent: React.FC<{ data: Post }> = ({ data }) => {
  return (
    <li className={styles.item}>
      <h3>{data.title}</h3>
      <p>{data.body}</p>
      <br />
      <small>{data.createdAt.toLocaleString()}</small>
    </li>
  );
};

export default ListItemComponent;
