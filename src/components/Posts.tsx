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

import Post from "./Post";

function Posts() {
  return (
    <div className="posts">
      <Post created={getDate()} body="Пост, относящийся к курсу React" />
      <Post
        created={getDate()}
        body="Другой пост, относящийся к курсу по React"
      />
    </div>
  );
}

export default Posts;
