import React, { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import List from "./components/List";
import RefFormInput from "./components/RefFormInput";
import StateFormInput from "./components/StateFormInput";
import useList from "./components/List/use-list";

const App: React.FC = () => {
  const posts = useList();

  const nameRef = useRef<HTMLInputElement>(null);
  const [lastName, setLastName] = useState("");

  return (
    <>
      <Card>
        <form>
          <RefFormInput config={{ name: "first-name", label: "名", helpText: "名前はこちら" }} />
          <StateFormInput
            config={{ name: "last-name", label: "姓" }}
            value={lastName}
            onInput={(value) => setLastName(value)}
          />
        </form>
      </Card>
      <Card>
        <List listData={posts} />
      </Card>
    </>
  );
};

export default App;
