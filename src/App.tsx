import moment from "moment";
moment.locale("ru", {
  months: [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ],
});

const getDate = (): string => {
  const date = new Date();
  return moment(date).format("HH:mm DD MMMM YYYY");
};

function Post({ created, body }: { created: string; body: string }) {
  return (
    <div className="post">
      <div className="post-header">
        <span className="post-author">No Name</span>{" "}
        <span className="post-created">{created}</span>
      </div>
      <div className="post-content">{body}</div>
    </div>
  );
}

function NewPost() {
  return (
    <form className="post-new">
      <div className="post-control">
        <button className="btn btn-icon">
          <span className="material-symbols-outlined">close</span>
        </button>
      </div>
      <div className="post-input">
        <div className="post-img"></div>
        <input className="post-textarea" placeholder="Введите текст" />
      </div>
      <div className="post-control bottom">
        <button type="submit" className="btn">
          Опубликовать
        </button>
      </div>
    </form>
  );
}

function WiewPost({ created, body }: { created: string; body: string }) {
  return (
    <div className="post-view">
      <div className="post">
        <div className="post-header">
          <span className="post-author">No Name</span>{" "}
          <span className="post-created">{created}</span>
        </div>
        <div className="post-content">{body}</div>
      </div>
      <form className="post-control bottom">
        <button type="submit" className="btn">
          Изменить
        </button>
        <button type="button" className="btn btn-delete">
          Удалить
        </button>
      </form>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <form className="menu">
        <button className="btn" type="submit">
          Создать пост
        </button>
      </form>
      <div className="posts">
        <Post created={getDate()} body="Пост, относящийся к курсу React" />
        <Post
          created={getDate()}
          body="Другой пост, относящийся к курсу по React"
        />
      </div>
      <NewPost />
      <WiewPost
        created={getDate()}
        body="Третий пост, относящийся к курсу по React"
      />
    </div>
  );
}

export default App;
