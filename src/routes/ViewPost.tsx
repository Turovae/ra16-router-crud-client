import { redirect, useLoaderData, Form, Link } from "react-router-dom";
import getDate from "../utils/getDate";

export async function loader({ params }) {
  const response = await fetch(`http://localhost:7070/posts/${params.id}`);
  const post = await response.json();

  return post;
}

export async function action({ params }) {
  console.log(params);
  const response = await fetch(`http://localhost:7070/posts/${params.id}`, {
    method: "DELETE",
  });

  console.log(response);

  if (response.ok) {
    return redirect("/");
  }

  return null;
}

function ViewPost() {
  const { post } = useLoaderData() as {
    post: { id: number; content: string; created: number };
  };

  return (
    <div className="post-view">
      <div className="post">
        <div className="post-header">
          <span className="post-author">No Name</span>{" "}
          <span className="post-created">{getDate(post.created)}</span>
        </div>
        <div className="post-content">{post.content}</div>
      </div>
      <Form method="post" className="post-control bottom">
        <Link
          to={`/posts/${post.id}/edit`}
          className="btn"
          state={{ content: post.content }}
        >
          Изменить
        </Link>
        <button type="submit" className="btn btn-delete">
          Удалить
        </button>
      </Form>
    </div>
  );
}

export default ViewPost;
