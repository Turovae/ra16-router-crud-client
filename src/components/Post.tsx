function Post({ created, body }: { created: string; body: string }) {
  return (
    <div className="post">
      <div className="post-header">
        <span className="post-author">No Name</span>{" "}
        <span className="post-created">{created}</span>
      </div>
      <div className="post-content">{body}</div>
    </div>
  );
}

export default Post;
