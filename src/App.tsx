import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import List from "./components/List";
import useList from "./components/List/use-list";

const App: React.FC = () => {
  const posts = useList();

  return (
    <Card>
      <List listData={posts} />
    </Card>
  );
};

export default App;
