import React, { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import List from "./components/List";
import RefFormInput from "./components/RefFormInput";
import StateFormInput from "./components/StateFormInput";
import useList from "./components/List/use-list";

const App: React.FC = () => {
  const posts = useList();

  return (
    <>
      <Card>
        <form>
        </form>
      </Card>
      <Card>
        <List listData={posts} />
      </Card>
    </>
  );
};

export default App;
