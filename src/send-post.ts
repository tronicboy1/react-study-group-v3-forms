import { Post } from "./components/List/types";

export const sendPost = (postData: Omit<Post, "id">) =>
  fetch(
    "https://react-study-group-v3-forms-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: postData.title,
        body: postData.body,
        createdAt: postData.createdAt.getTime(),
      }),
    }
  );
