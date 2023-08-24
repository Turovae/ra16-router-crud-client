import { useLoaderData } from "react-router-dom";

export async function loader({ params }) {
  console.log(params);

  const response = await fetch(`http://localhost:7070/posts/${params.id}`);
  const post = await response.json();
  console.log(post);

  return { post };
}

function ViewPost() {
  const { post } = useLoaderData() as {
    post: { id: number; content: string; created: number };
  };

  console.log(post);
  return (
    <div className="post-view">
      <div className="post">
        <div className="post-header">
          <span className="post-author">No Name</span>{" "}
          <span className="post-created">{post.created}</span>
        </div>
        <div className="post-content">{post.content}</div>
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

export default ViewPost;
