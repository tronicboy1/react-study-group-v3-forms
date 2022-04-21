import React from "react";
import styles from "./List.module.css";
import ListItem from "./ListItem";
import { Post } from "./types";

const BaseListComponent: React.FC<{ listData: Post[] }> = ({ listData }) => {
  return (
    <ul className={styles.list}>
      {listData.map((item) => (
        <ListItem key={item.id} data={item} />
      ))}
    </ul>
  );
};

export default BaseListComponent;
