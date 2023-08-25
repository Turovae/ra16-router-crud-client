import { useNavigate } from "react-router-dom";
import getDate from "../utils/getDate";

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
