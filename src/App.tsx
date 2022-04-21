import React from "react";
import Card from "./components/Card";
import List from "./components/List";
import { Post } from "./components/List/types";

const App: React.FC = () => {
  const DUMMY_DATA: Post[] = [
    {
      id: "p1",
      title: "Post 1",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vel nulla rutrum ipsum lacinia euismod eu euismod lectus. Vestibulum nec nisl vulputate, pellentesque felis sed, vulputate nulla. Maecenas elementum commodo magna et dictum. Integer elementum lectus ut ante interdum, vel luctus urna rutrum. Mauris gravida porttitor tortor non suscipit. Donec tristique ligula sodales, lacinia massa quis, pharetra nunc. Nullam quis volutpat mi. Mauris vitae justo magna. Curabitur eu hendrerit lorem. Ut scelerisque, risus eget pulvinar lacinia, velit risus blandit diam, nec ultrices leo sem imperdiet orci.",
      createdAt: new Date(),
    },
  ];
  return (
    <Card>
      <List listData={DUMMY_DATA} />
    </Card>
  );
};

export default App;
