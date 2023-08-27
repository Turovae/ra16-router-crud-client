import { redirect, useLoaderData, Form, Link, Params } from "react-router-dom";
import getDate from "../utils/getDate";

const URL = import.meta.env.VITE_URL || "http://localhost:7070";

export async function loader({ params }: { params: Params }) {
  const response = await fetch(`${URL}/posts/${params.id}`);
  const post = await response.json();

  return post;
}

export async function action({ params }: { params: Params }) {
  console.log(params);
  const response = await fetch(`${URL}/posts/${params.id}`, {
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
          <div className="post-info">
            <span className="post-author">No Name</span>{" "}
            <span className="post-created">{getDate(post.created)}</span>
          </div>
          <Link to="/" className="btn btn-icon btn-close">
            <span className="material-symbols-outlined">close</span>
          </Link>
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
