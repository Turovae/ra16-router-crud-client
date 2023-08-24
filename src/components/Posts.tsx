import Post from "./Post";

function Posts({
  posts,
}: {
  posts: { id: number; content: string; created: number }[];
}) {
  return (
    <div className="posts">
      {posts.length ? (
        posts.map((post) => (
          <Post
            created={post.created}
            key={post.id}
            body={post.content}
            id={post.id}
          />
        ))
      ) : (
        <p>Постов нет</p>
      )}
    </div>
  );
}

export default Posts;
