import React, { useEffect, useRef, useState } from "react";
import Card from "./components/Card";
import List from "./components/List";
import RefFormInput from "./components/RefFormInput";
import StateFormInput from "./components/StateFormInput";
import useList from "./components/List/use-list";
import { sendPost } from "./send-post";

const App: React.FC = () => {
  const posts = useList();
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);

  const validator = (value: string, maxTextSize: number) =>
    value.length <= maxTextSize;

  const handleChange = (value: string) => {
    const isValid = validator(value, 100);
    if (!isValid) {
      setNameError("名前は100文字前にしてください。");
    } else {
      setNameError(null);
    }
    setName(value);
  };

  const handleSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();
    const title = titleRef.current!.value.trim();
    const body = bodyRef.current!.value.trim();
    if (validator(title, 100) && validator(body, 500) && !nameError) {
      sendPost({ title, sender: name, body, createdAt: new Date() });
    }
  };

  return (
    <>
      <Card>
        <form onSubmit={handleSubmit}>
          <StateFormInput
            config={{ name: "name", label: "名前", error: nameError }}
            value={name}
            onInput={handleChange}
          />
          <RefFormInput
            config={{
              name: "title",
              label: "タイトル",
              helpText: "入力は100文字まで",
              required: true,
            }}
            ref={titleRef}
          />
          <RefFormInput
            config={{ name: "body", label: "内容" }}
            ref={bodyRef}
          />
          <button type="submit">送信</button>
        </form>
      </Card>
      <Card>
        <List listData={posts} />
      </Card>
    </>
  );
};

export default App;
