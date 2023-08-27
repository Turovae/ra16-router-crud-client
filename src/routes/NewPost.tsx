import { ChangeEvent, useState } from "react";
import { Form, redirect, useNavigate } from "react-router-dom";

const URL = import.meta.env.VITE_URL || "http://localhost:7070";

export async function action({ request }: { request: Request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const response = await fetch(`${URL}/posts`, {
    method: "POST",
    body: JSON.stringify(data),
  });

  if (response.ok) {
    localStorage.setItem("content", "");
    return redirect("/");
  }

  return null;
}

function NewPost() {
  const contentFromStorage = localStorage.getItem("content");
  const [content, setContent] = useState(contentFromStorage || "");
  const navigate = useNavigate();

  const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setContent(evt.target.value);
  };

  const handleClose = () => {
    localStorage.setItem("content", content);

    navigate("/", { replace: false });
  };

  return (
    <Form method="post" className="post-new">
      <div className="post-control">
        <button type="button" className="btn btn-icon" onClick={handleClose}>
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <div className="post-input">
        <div className="post-img"></div>
        <input
          className="post-textarea"
          name="content"
          placeholder="Введите текст"
          onChange={changeHandler}
          value={content}
        />
      </div>
      <div className="post-control bottom">
        <button type="submit" className="btn">
          Опубликовать
        </button>
      </div>
    </Form>
  );
}

export default NewPost;
