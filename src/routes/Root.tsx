import { useLoaderData, Form, useNavigate, Link } from "react-router-dom";
import Posts from "../components/Posts";

export async function loader() {
  const response = await fetch("http://localhost:7070/posts");
  const posts = await response.json();

  return { posts };
}

// export function action() {
//   const navigate = useNavigate();
//   return navigate("/posts/new");
// }

function Root() {
  const { posts } = useLoaderData() as {
    posts: { id: number; content: string; created: number }[];
  };
  console.log(posts);
  return (
    <>
      <div className="menu">
        <Link className="btn" to="/posts/new">
          Создать пост
        </Link>
      </div>
      <Posts posts={posts} />
    </>
  );
}

export default Root;
