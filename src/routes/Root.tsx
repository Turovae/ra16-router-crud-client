import { useLoaderData, Link } from "react-router-dom";
import Posts from "../components/Posts";

const URL = import.meta.env.VITE_URL || "http://localhost:7070";

export async function loader() {
  const response = await fetch(`${URL}/posts`);
  const posts = await response.json();

  return { posts };
}

function Root() {
  const { posts } = useLoaderData() as {
    posts: { id: number; content: string; created: number }[];
  };
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
