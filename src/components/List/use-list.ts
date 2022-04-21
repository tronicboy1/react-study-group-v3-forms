import React, { useEffect } from "react";
import { useState } from "react";
import { Post, PostsData } from "./types";
import {
  ref,
  onValue,
  query,
  orderByChild,
  limitToLast,
} from "firebase/database";
import { database } from "../../firebase";

const useList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const postsRef = ref(database, "/posts");
    const postsQuery = query(
      postsRef,
      orderByChild("createdAt"),
      limitToLast(10)
    );
    onValue(postsQuery, (snapshot) => {
      const value = snapshot.val() as PostsData;
      const formatted: Post[] = Object.keys(value).map((key) => ({
        id: key,
        ...value[key],
        createdAt: new Date(value[key].createdAt),
      }));
      setPosts(formatted);
    });
  }, []);

  return posts;
};

export default useList;
