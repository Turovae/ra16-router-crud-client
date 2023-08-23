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

function Posts({ posts }: { posts: { id: number; content: string }[] }) {
  return (
    <div className="posts">
      {posts.length ? (
        posts.map((post) => (
          <Post created={getDate()} key={post.id} body={post.content} />
        ))
      ) : (
        <p>Постов нет</p>
      )}
    </div>
  );
}

export default Posts;
