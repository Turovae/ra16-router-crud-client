import { ChangeEvent, useState } from "react";
import { Form, Params, redirect, useLocation } from "react-router-dom";

const URL = import.meta.env.VITE_URL || "http://localhost:7070";

export async function action({
  request,
  params,
}: {
  request: Request;
  params: Params;
}) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  const response = await fetch(`${URL}/posts/${params.id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });

  if (response.ok) {
    return redirect(`/posts/${params.id}`);
  }

  return null;
}

function EditPost() {
  const { state } = useLocation();

  const [text, setText] = useState(state.content);

  const changeText = (evt: ChangeEvent<HTMLInputElement>) => {
    setText(evt.target.value);
  };

  return (
    <Form className="post-edit" method="POST">
      <div className="post-control top">
        <h2 className="edit-title">Редактировать публикацию</h2>
        <button className="btn btn-icon">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <div className="post-input">
        <div className="post-img"></div>
        <input
          className="post-textarea"
          placeholder="Введите текст"
          value={text}
          onChange={changeText}
          name="content"
        />
      </div>
      <div className="post-control bottom">
        <button type="submit" className="btn">
          Сохранить
        </button>
      </div>
    </Form>
  );
}

export default EditPost;
