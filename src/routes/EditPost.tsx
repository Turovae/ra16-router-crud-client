import { ChangeEvent, useState } from "react";
import { useLocation } from "react-router-dom";

function EditPost() {
  const { state } = useLocation();

  const [text, setText] = useState(state.content);

  const changeText = (evt: ChangeEvent<HTMLInputElement>) => {
    setText(evt.target.value);
  };

  return (
    <form className="post-edit">
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
        />
      </div>
      <div className="post-control bottom">
        <button type="submit" className="btn">
          Сохранить
        </button>
      </div>
    </form>
  );
}

export default EditPost;
