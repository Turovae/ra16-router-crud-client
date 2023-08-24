import { useNavigate } from "react-router-dom";

import moment from "moment";

moment.updateLocale("ru", {
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

const getDate = (timestamp: number): string => {
  return moment(timestamp).format("HH:mm DD MMMM YYYY");
};

function Post({
  created,
  body,
  id,
}: {
  created: number;
  body: string;
  id: number;
}) {
  const navigate = useNavigate();

  return (
    <div
      className="post"
      onClick={() => {
        console.log(id);
        navigate(`posts/${id}`);
      }}
    >
      <div className="post-header">
        <span className="post-author">No Name</span>{" "}
        <span className="post-created">{getDate(created)}</span>
      </div>
      <div className="post-content">{body}</div>
    </div>
  );
}

export default Post;
