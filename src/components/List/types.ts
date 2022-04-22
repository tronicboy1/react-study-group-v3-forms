export type Post = {
  id: string | number;
  sender: string;
  title: string;
  body: string;
  createdAt: Date;
};

export type PostsData = {
  [id: string]: Omit<Post, "id" | "createdAt"> & { createdAt: number };
};
